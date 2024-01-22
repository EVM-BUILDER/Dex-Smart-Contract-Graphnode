// SPDX-License-Identifier: MIT
//0xEaaFa39c860ff495da35bed9aD6ff3a4eCbe3c1f
pragma solidity >=0.6.0 <=0.8.0;
pragma abicoder v2;

import "./Context.sol";
import "./Ownable.sol";
import "./SafeMath.sol";
import "./Ownable.sol";
import "./IERC20.sol";
import "./ReentrancyGuard.sol";
import "./Pausable.sol";

contract TokenFaucet is Ownable, Pausable, ReentrancyGuard {
    using SafeMath for uint256;

    event Claimed(
        address indexed buyer,
        uint256 quantity,
        uint256 timestamp
    );

    event DepositPI(
        uint256 quantity,
        uint256 timestamp
    );

    struct UserInfo {
        uint256 totalQuantity;
        uint256 lastQuantity;
        uint256 lastSend;
    }

     modifier onlySafe() {
        require(whiteList[msg.sender], "require Safe Address.");
        _;
    }

    mapping(address => mapping(address => UserInfo)) public userInfos;
    mapping(address => bool) public whiteList;
    mapping(address => bool) public tokens;
    uint256 public AMOUNT_TOKEN = 1000 ether;
    uint256 public AMOUNT_NATIVE_TOKEN = 1 ether;

    /**
     * @dev Claim Token
     */
    function claim(address _tokenAddress, address _userAddress)
        public
        payable
        nonReentrant
        whenNotPaused
        onlySafe
    {
        require(tokens[_tokenAddress], "not  supported address");
        uint256 _quantity = AMOUNT_TOKEN;
        if(_tokenAddress == address(0)) {
            _quantity = AMOUNT_NATIVE_TOKEN;
        }
        UserInfo storage userInfo = userInfos[_tokenAddress][_userAddress];
        userInfo.lastSend = block.timestamp;
        userInfo.totalQuantity = userInfo.totalQuantity.add(_quantity);
        userInfo.lastQuantity = _quantity;
        if(_tokenAddress == address(0)) {
            payable(_userAddress).transfer(_quantity);
        }else {
            IERC20(_tokenAddress).transfer(_userAddress, _quantity);
        }
        emit Claimed(_userAddress, _quantity, block.timestamp);
    }

    function modifyWhiteList(
        address[] memory newAddr,
        address[] memory removedAddr
    ) public onlyOwner {
        for (uint256 index; index < newAddr.length; index++) {
            whiteList[newAddr[index]] = true;
        }
        for (uint256 index; index < removedAddr.length; index++) {
            whiteList[removedAddr[index]] = false;
        }
    }

    function modifyTokenWhiteList(
        address[] memory newAddr,
        address[] memory removedAddr
    ) public onlyOwner {
        for (uint256 index; index < newAddr.length; index++) {
            tokens[newAddr[index]] = true;
        }
        for (uint256 index; index < removedAddr.length; index++) {
            tokens[removedAddr[index]] = false;
        }
    }

    function setLimit(uint256 _tokenQuantity, uint256 _nativeQuantity) external onlyOwner {
        AMOUNT_TOKEN = _tokenQuantity;
        AMOUNT_NATIVE_TOKEN = _nativeQuantity;
    }


    function getUserInfo(address tokenAddress, address userAddress)
        public
        view
        returns (UserInfo memory user)
    {
        user = userInfos[tokenAddress][userAddress];
    }

    fallback() external payable {
        emit DepositPI(msg.value, block.timestamp);
    }

    function balanceOf()
        public
        view
        returns (uint256 balance)
    {
        balance = address(this).balance;
    }

    /**
     * @dev Withdraw bnb from this contract (Callable by owner only)
     */
    function handleForfeitedBalance(
        address coinAddress,
        uint256 value,
        address payable to
    ) public onlyOwner {
        if (coinAddress == address(0)) {
            return to.transfer(value);
        }
        IERC20(coinAddress).transfer(to, value);
    }
}
