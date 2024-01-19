import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeePayed,
  NewDeposit,
  Newbie,
  OwnershipTransferred,
  Paused,
  UnStake,
  Unpaused,
  Withdrawn
} from "../generated/Contract/Contract"

export function createFeePayedEvent(
  user: Address,
  totalAmount: BigInt
): FeePayed {
  let feePayedEvent = changetype<FeePayed>(newMockEvent())

  feePayedEvent.parameters = new Array()

  feePayedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  feePayedEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return feePayedEvent
}

export function createNewDepositEvent(
  user: Address,
  poolId: i32,
  plan: i32,
  apr: BigInt,
  amount: BigInt,
  start: BigInt,
  finish: BigInt,
  fee: BigInt
): NewDeposit {
  let newDepositEvent = changetype<NewDeposit>(newMockEvent())

  newDepositEvent.parameters = new Array()

  newDepositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam(
      "poolId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(poolId))
    )
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam(
      "plan",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(plan))
    )
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("apr", ethereum.Value.fromUnsignedBigInt(apr))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("start", ethereum.Value.fromUnsignedBigInt(start))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("finish", ethereum.Value.fromUnsignedBigInt(finish))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return newDepositEvent
}

export function createNewbieEvent(user: Address, registerTime: BigInt): Newbie {
  let newbieEvent = changetype<Newbie>(newMockEvent())

  newbieEvent.parameters = new Array()

  newbieEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newbieEvent.parameters.push(
    new ethereum.EventParam(
      "registerTime",
      ethereum.Value.fromUnsignedBigInt(registerTime)
    )
  )

  return newbieEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnStakeEvent(
  user: Address,
  start: BigInt,
  amount: BigInt,
  profit: BigInt
): UnStake {
  let unStakeEvent = changetype<UnStake>(newMockEvent())

  unStakeEvent.parameters = new Array()

  unStakeEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  unStakeEvent.parameters.push(
    new ethereum.EventParam("start", ethereum.Value.fromUnsignedBigInt(start))
  )
  unStakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unStakeEvent.parameters.push(
    new ethereum.EventParam("profit", ethereum.Value.fromUnsignedBigInt(profit))
  )

  return unStakeEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawnEvent(
  user: Address,
  start: BigInt,
  poolId: BigInt,
  plan: BigInt,
  profit: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("start", ethereum.Value.fromUnsignedBigInt(start))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("plan", ethereum.Value.fromUnsignedBigInt(plan))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("profit", ethereum.Value.fromUnsignedBigInt(profit))
  )

  return withdrawnEvent
}
