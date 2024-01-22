// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FeePayed extends ethereum.Event {
  get params(): FeePayed__Params {
    return new FeePayed__Params(this);
  }
}

export class FeePayed__Params {
  _event: FeePayed;

  constructor(event: FeePayed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewDeposit extends ethereum.Event {
  get params(): NewDeposit__Params {
    return new NewDeposit__Params(this);
  }
}

export class NewDeposit__Params {
  _event: NewDeposit;

  constructor(event: NewDeposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get poolId(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get plan(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get apr(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get start(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get finish(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Newbie extends ethereum.Event {
  get params(): Newbie__Params {
    return new Newbie__Params(this);
  }
}

export class Newbie__Params {
  _event: Newbie;

  constructor(event: Newbie) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get registerTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UnStake extends ethereum.Event {
  get params(): UnStake__Params {
    return new UnStake__Params(this);
  }
}

export class UnStake__Params {
  _event: UnStake;

  constructor(event: UnStake) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get start(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get profit(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get poolId(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get plan(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get start(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get poolId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get plan(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get profit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NFTStaking__getPlanInfoResultPlanStruct extends ethereum.Tuple {
  get time(): BigInt {
    return this[0].toBigInt();
  }

  get apr(): BigInt {
    return this[1].toBigInt();
  }

  get totalStakedAmount(): BigInt {
    return this[2].toBigInt();
  }
}

export class NFTStaking__getResultResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getApr(): BigInt {
    return this.value0;
  }

  getFinish(): BigInt {
    return this.value1;
  }
}

export class NFTStaking__getUserInfoResultUserInfoStruct extends ethereum.Tuple {
  get deposits(): Array<NFTStaking__getUserInfoResultUserInfoDepositsStruct> {
    return this[0].toTupleArray<
      NFTStaking__getUserInfoResultUserInfoDepositsStruct
    >();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get registerTime(): BigInt {
    return this[2].toBigInt();
  }

  get lastStake(): BigInt {
    return this[3].toBigInt();
  }
}

export class NFTStaking__getUserInfoResultUserInfoDepositsStruct extends ethereum.Tuple {
  get poolId(): i32 {
    return this[0].toI32();
  }

  get plan(): i32 {
    return this[1].toI32();
  }

  get apr(): BigInt {
    return this[2].toBigInt();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get start(): BigInt {
    return this[4].toBigInt();
  }

  get finish(): BigInt {
    return this[5].toBigInt();
  }

  get userAddress(): Address {
    return this[6].toAddress();
  }

  get fee(): BigInt {
    return this[7].toBigInt();
  }

  get isUnStake(): boolean {
    return this[8].toBoolean();
  }

  get checkpoint(): BigInt {
    return this[9].toBigInt();
  }
}

export class NFTStaking__poolPlansResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getTime(): BigInt {
    return this.value0;
  }

  getApr(): BigInt {
    return this.value1;
  }

  getTotalStakedAmount(): BigInt {
    return this.value2;
  }
}

export class NFTStaking__poolsResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getRewardAddress(): Address {
    return this.value0;
  }

  getStakeAddress(): Address {
    return this.value1;
  }
}

export class NFTStaking extends ethereum.SmartContract {
  static bind(address: Address): NFTStaking {
    return new NFTStaking("NFTStaking", address);
  }

  calculateDivedend(start: BigInt, userAddress: Address): BigInt {
    let result = super.call(
      "calculateDivedend",
      "calculateDivedend(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(start),
        ethereum.Value.fromAddress(userAddress)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateDivedend(
    start: BigInt,
    userAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateDivedend",
      "calculateDivedend(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(start),
        ethereum.Value.fromAddress(userAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  commissionWallet(): Address {
    let result = super.call(
      "commissionWallet",
      "commissionWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_commissionWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "commissionWallet",
      "commissionWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPlanInfo(
    poolId: i32,
    planId: i32
  ): NFTStaking__getPlanInfoResultPlanStruct {
    let result = super.call(
      "getPlanInfo",
      "getPlanInfo(uint8,uint8):((uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(poolId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(planId))
      ]
    );

    return changetype<NFTStaking__getPlanInfoResultPlanStruct>(
      result[0].toTuple()
    );
  }

  try_getPlanInfo(
    poolId: i32,
    planId: i32
  ): ethereum.CallResult<NFTStaking__getPlanInfoResultPlanStruct> {
    let result = super.tryCall(
      "getPlanInfo",
      "getPlanInfo(uint8,uint8):((uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(poolId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(planId))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NFTStaking__getPlanInfoResultPlanStruct>(value[0].toTuple())
    );
  }

  getResult(poolId: i32, plan: i32): NFTStaking__getResultResult {
    let result = super.call(
      "getResult",
      "getResult(uint8,uint8):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(poolId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(plan))
      ]
    );

    return new NFTStaking__getResultResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getResult(
    poolId: i32,
    plan: i32
  ): ethereum.CallResult<NFTStaking__getResultResult> {
    let result = super.tryCall(
      "getResult",
      "getResult(uint8,uint8):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(poolId)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(plan))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTStaking__getResultResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  getUserInfo(
    userAddress: Address
  ): NFTStaking__getUserInfoResultUserInfoStruct {
    let result = super.call(
      "getUserInfo",
      "getUserInfo(address):(((uint8,uint8,uint256,uint256,uint256,uint256,address,uint256,bool,uint256)[],address,uint256,uint256))",
      [ethereum.Value.fromAddress(userAddress)]
    );

    return changetype<NFTStaking__getUserInfoResultUserInfoStruct>(
      result[0].toTuple()
    );
  }

  try_getUserInfo(
    userAddress: Address
  ): ethereum.CallResult<NFTStaking__getUserInfoResultUserInfoStruct> {
    let result = super.tryCall(
      "getUserInfo",
      "getUserInfo(address):(((uint8,uint8,uint256,uint256,uint256,uint256,address,uint256,bool,uint256)[],address,uint256,uint256))",
      [ethereum.Value.fromAddress(userAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NFTStaking__getUserInfoResultUserInfoStruct>(
        value[0].toTuple()
      )
    );
  }

  getUserTotalDeposits(userAddress: Address): BigInt {
    let result = super.call(
      "getUserTotalDeposits",
      "getUserTotalDeposits(address):(uint256)",
      [ethereum.Value.fromAddress(userAddress)]
    );

    return result[0].toBigInt();
  }

  try_getUserTotalDeposits(userAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserTotalDeposits",
      "getUserTotalDeposits(address):(uint256)",
      [ethereum.Value.fromAddress(userAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isUnStake(userAddress: Address, start: BigInt): boolean {
    let result = super.call("isUnStake", "isUnStake(address,uint256):(bool)", [
      ethereum.Value.fromAddress(userAddress),
      ethereum.Value.fromUnsignedBigInt(start)
    ]);

    return result[0].toBoolean();
  }

  try_isUnStake(
    userAddress: Address,
    start: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUnStake",
      "isUnStake(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(start)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  PERCENTS_DIVIDER(): BigInt {
    let result = super.call(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PERCENTS_DIVIDER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolPlans(param0: BigInt, param1: BigInt): NFTStaking__poolPlansResult {
    let result = super.call(
      "poolPlans",
      "poolPlans(uint256,uint256):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new NFTStaking__poolPlansResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_poolPlans(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<NFTStaking__poolPlansResult> {
    let result = super.tryCall(
      "poolPlans",
      "poolPlans(uint256,uint256):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTStaking__poolPlansResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  pools(param0: BigInt): NFTStaking__poolsResult {
    let result = super.call("pools", "pools(uint256):(address,address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new NFTStaking__poolsResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_pools(param0: BigInt): ethereum.CallResult<NFTStaking__poolsResult> {
    let result = super.tryCall("pools", "pools(uint256):(address,address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTStaking__poolsResult(value[0].toAddress(), value[1].toAddress())
    );
  }

  PROJECT_FEE(): BigInt {
    let result = super.call("PROJECT_FEE", "PROJECT_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PROJECT_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PROJECT_FEE", "PROJECT_FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TIME_STAKE(): BigInt {
    let result = super.call("TIME_STAKE", "TIME_STAKE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TIME_STAKE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TIME_STAKE", "TIME_STAKE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TIME_STEP(): BigInt {
    let result = super.call("TIME_STEP", "TIME_STEP():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TIME_STEP(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TIME_STEP", "TIME_STEP():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalStakedAmount(): BigInt {
    let result = super.call(
      "totalStakedAmount",
      "totalStakedAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalStakedAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalStakedAmount",
      "totalStakedAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  UNLOCK_FEE(): BigInt {
    let result = super.call("UNLOCK_FEE", "UNLOCK_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_UNLOCK_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("UNLOCK_FEE", "UNLOCK_FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whiteList(param0: Address): boolean {
    let result = super.call("whiteList", "whiteList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whiteList(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("whiteList", "whiteList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _commissionWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class HandleForfeitedBalanceCall extends ethereum.Call {
  get inputs(): HandleForfeitedBalanceCall__Inputs {
    return new HandleForfeitedBalanceCall__Inputs(this);
  }

  get outputs(): HandleForfeitedBalanceCall__Outputs {
    return new HandleForfeitedBalanceCall__Outputs(this);
  }
}

export class HandleForfeitedBalanceCall__Inputs {
  _call: HandleForfeitedBalanceCall;

  constructor(call: HandleForfeitedBalanceCall) {
    this._call = call;
  }

  get coinAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class HandleForfeitedBalanceCall__Outputs {
  _call: HandleForfeitedBalanceCall;

  constructor(call: HandleForfeitedBalanceCall) {
    this._call = call;
  }
}

export class InvestCall extends ethereum.Call {
  get inputs(): InvestCall__Inputs {
    return new InvestCall__Inputs(this);
  }

  get outputs(): InvestCall__Outputs {
    return new InvestCall__Outputs(this);
  }
}

export class InvestCall__Inputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get poolId(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get plan(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class InvestCall__Outputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }
}

export class ModifyWhiteListCall extends ethereum.Call {
  get inputs(): ModifyWhiteListCall__Inputs {
    return new ModifyWhiteListCall__Inputs(this);
  }

  get outputs(): ModifyWhiteListCall__Outputs {
    return new ModifyWhiteListCall__Outputs(this);
  }
}

export class ModifyWhiteListCall__Inputs {
  _call: ModifyWhiteListCall;

  constructor(call: ModifyWhiteListCall) {
    this._call = call;
  }

  get newAddr(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get removedAddr(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class ModifyWhiteListCall__Outputs {
  _call: ModifyWhiteListCall;

  constructor(call: ModifyWhiteListCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCommissionsWalletCall extends ethereum.Call {
  get inputs(): SetCommissionsWalletCall__Inputs {
    return new SetCommissionsWalletCall__Inputs(this);
  }

  get outputs(): SetCommissionsWalletCall__Outputs {
    return new SetCommissionsWalletCall__Outputs(this);
  }
}

export class SetCommissionsWalletCall__Inputs {
  _call: SetCommissionsWalletCall;

  constructor(call: SetCommissionsWalletCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCommissionsWalletCall__Outputs {
  _call: SetCommissionsWalletCall;

  constructor(call: SetCommissionsWalletCall) {
    this._call = call;
  }
}

export class SetFeeSystemCall extends ethereum.Call {
  get inputs(): SetFeeSystemCall__Inputs {
    return new SetFeeSystemCall__Inputs(this);
  }

  get outputs(): SetFeeSystemCall__Outputs {
    return new SetFeeSystemCall__Outputs(this);
  }
}

export class SetFeeSystemCall__Inputs {
  _call: SetFeeSystemCall;

  constructor(call: SetFeeSystemCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeSystemCall__Outputs {
  _call: SetFeeSystemCall;

  constructor(call: SetFeeSystemCall) {
    this._call = call;
  }
}

export class SetTime_StakeCall extends ethereum.Call {
  get inputs(): SetTime_StakeCall__Inputs {
    return new SetTime_StakeCall__Inputs(this);
  }

  get outputs(): SetTime_StakeCall__Outputs {
    return new SetTime_StakeCall__Outputs(this);
  }
}

export class SetTime_StakeCall__Inputs {
  _call: SetTime_StakeCall;

  constructor(call: SetTime_StakeCall) {
    this._call = call;
  }

  get _timeStake(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTime_StakeCall__Outputs {
  _call: SetTime_StakeCall;

  constructor(call: SetTime_StakeCall) {
    this._call = call;
  }
}

export class SetTime_StepCall extends ethereum.Call {
  get inputs(): SetTime_StepCall__Inputs {
    return new SetTime_StepCall__Inputs(this);
  }

  get outputs(): SetTime_StepCall__Outputs {
    return new SetTime_StepCall__Outputs(this);
  }
}

export class SetTime_StepCall__Inputs {
  _call: SetTime_StepCall;

  constructor(call: SetTime_StepCall) {
    this._call = call;
  }

  get _timeStep(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTime_StepCall__Outputs {
  _call: SetTime_StepCall;

  constructor(call: SetTime_StepCall) {
    this._call = call;
  }
}

export class SetUnlockFeeSystemCall extends ethereum.Call {
  get inputs(): SetUnlockFeeSystemCall__Inputs {
    return new SetUnlockFeeSystemCall__Inputs(this);
  }

  get outputs(): SetUnlockFeeSystemCall__Outputs {
    return new SetUnlockFeeSystemCall__Outputs(this);
  }
}

export class SetUnlockFeeSystemCall__Inputs {
  _call: SetUnlockFeeSystemCall;

  constructor(call: SetUnlockFeeSystemCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetUnlockFeeSystemCall__Outputs {
  _call: SetUnlockFeeSystemCall;

  constructor(call: SetUnlockFeeSystemCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnStakeCall extends ethereum.Call {
  get inputs(): UnStakeCall__Inputs {
    return new UnStakeCall__Inputs(this);
  }

  get outputs(): UnStakeCall__Outputs {
    return new UnStakeCall__Outputs(this);
  }
}

export class UnStakeCall__Inputs {
  _call: UnStakeCall;

  constructor(call: UnStakeCall) {
    this._call = call;
  }

  get start(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnStakeCall__Outputs {
  _call: UnStakeCall;

  constructor(call: UnStakeCall) {
    this._call = call;
  }
}

export class UpdatePlanCall extends ethereum.Call {
  get inputs(): UpdatePlanCall__Inputs {
    return new UpdatePlanCall__Inputs(this);
  }

  get outputs(): UpdatePlanCall__Outputs {
    return new UpdatePlanCall__Outputs(this);
  }
}

export class UpdatePlanCall__Inputs {
  _call: UpdatePlanCall;

  constructor(call: UpdatePlanCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get planId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get plan(): UpdatePlanCallPlanStruct {
    return changetype<UpdatePlanCallPlanStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class UpdatePlanCall__Outputs {
  _call: UpdatePlanCall;

  constructor(call: UpdatePlanCall) {
    this._call = call;
  }
}

export class UpdatePlanCallPlanStruct extends ethereum.Tuple {
  get time(): BigInt {
    return this[0].toBigInt();
  }

  get apr(): BigInt {
    return this[1].toBigInt();
  }

  get totalStakedAmount(): BigInt {
    return this[2].toBigInt();
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get pool(): UpdatePoolCallPoolStruct {
    return changetype<UpdatePoolCallPoolStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }
}

export class UpdatePoolCallPoolStruct extends ethereum.Tuple {
  get rewardAddress(): Address {
    return this[0].toAddress();
  }

  get stakeAddress(): Address {
    return this[1].toAddress();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get start(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
