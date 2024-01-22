/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, ByteArray, Value, log, Bytes } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../generated/NFTStaking/ERC20";
import { ERC20NameBytes } from "../../generated/NFTStaking/ERC20NameBytes";
import { ERC20SymbolBytes } from "../../generated/NFTStaking/ERC20SymbolBytes";
import { NFTStaking } from "../../generated/NFTStaking/NFTStaking";

export let ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
// prettier-ignore
export let CONTRACT_ADDRESS = "0x73cc8B200Af0189cC6Fa460EB105E46c47E6B5cA";

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let BI_18 = BigInt.fromI32(18);

export let contractAddress = NFTStaking.bind(Address.fromString(CONTRACT_ADDRESS));

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString("1");
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(BigDecimal.fromString("10"));
  }
  return bd;
}

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
  if (exchangeDecimals == ZERO_BI) {
    return tokenAmount.toBigDecimal();
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals));
}

export function isNullBnbValue(value: string): boolean {
  return value == "0x0000000000000000000000000000000000000000000000000000000000000001";
}

export function fetchTokenName(tokenAddress: Address): string {
    let contract = ERC20.bind(tokenAddress);
    let contractNameBytes = ERC20NameBytes.bind(tokenAddress);
  
    let nameValue = "unknown";
    let nameResult = contract.try_name();
    if (nameResult.reverted) {
      let nameResultBytes = contractNameBytes.try_name();
      if (!nameResultBytes.reverted) {
        if (!isNullBnbValue(nameResultBytes.value.toHex())) {
          nameValue = nameResultBytes.value.toString();
        }
      }
    } else {
      nameValue = nameResult.value;
    }
    return nameValue;
  }

export function fetchTokenSymbol(tokenAddress: Address): string {
  let contract = ERC20.bind(tokenAddress);
  let contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress);

  let symbolValue = "unknown";
  let symbolResult = contract.try_symbol();
  if (symbolResult.reverted) {
    let symbolResultBytes = contractSymbolBytes.try_symbol();
    if (!symbolResultBytes.reverted) {
      if (!isNullBnbValue(symbolResultBytes.value.toHex())) {
        symbolValue = symbolResultBytes.value.toString();
      }
    }
  } else {
    symbolValue = symbolResult.value;
  }
  return symbolValue;
}

export function fetchTokenDecimals(tokenAddress: Address): BigInt {
  let contract = ERC20.bind(tokenAddress);
  let decimalValue = null;
  let decimalResult = contract.try_decimals();
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value;
  }
  return BigInt.fromI32(decimalValue as i32);
}

export function fetchLpAddressPool(poolId: BigInt): Address {
    let pool = contractAddress.try_pools(poolId); //return value and percent
    if (pool.reverted) {
        return Address.fromString("0x0000000000000000000000000000000000000000");
    }
    return pool.value.getStakeAddress();
}

export function fetchRwAddressPool(poolId: BigInt): Address {
    let pool = contractAddress.try_pools(poolId); //return value and percent
    if (pool.reverted) {
        return Address.fromString("0x0000000000000000000000000000000000000000");
    }
    return pool.value.getRewardAddress();
}
  
export function fetchTotalStaked(poolId: BigInt, planId: BigInt): BigInt {
    let poolPlans = contractAddress.try_poolPlans(poolId, planId);
    return poolPlans.value.getTotalStakedAmount();
}

export function fetchApr(poolId: BigInt, planId: BigInt): BigInt {
    let poolPlans = contractAddress.try_poolPlans(poolId, planId);
    return poolPlans.value.getApr();
}

export function fetchTime(poolId: BigInt, planId: BigInt): BigInt {
    let poolPlans = contractAddress.try_poolPlans(poolId, planId);
    return poolPlans.value.getTime();
}