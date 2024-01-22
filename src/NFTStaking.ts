import { BigInt, Value, log } from "@graphprotocol/graph-ts";
import {
  FeePayed as FeePayedEvent,
  NewDeposit as NewDepositEvent,
  Newbie as NewbieEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  UnStake as UnStakeEvent,
  Unpaused as UnpausedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/NFTStaking/NFTStaking";
import {
  FeePayed,
  NewDeposit,
  Newbie,
  OwnershipTransferred,
  Paused,
  Pool,
  UnStake,
  Unpaused,
  Withdrawn,
  Token,
  Term
} from "../generated/schema";

import {
  CONTRACT_ADDRESS,
  ONE_BI,
  ZERO_BI,
  fetchApr,
  fetchLpAddressPool,
  fetchRwAddressPool,
  fetchTime,
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTotalStaked
} from "./utils";

export function handleFeePayed(event: FeePayedEvent): void {
  let entity = new FeePayed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.totalAmount = event.params.totalAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNewDeposit(event: NewDepositEvent): void {
  let entity = new NewDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.poolId = event.params.poolId;
  entity.plan = event.params.plan;
  entity.apr = event.params.apr;
  entity.amount = event.params.amount;
  entity.start = event.params.start;
  entity.finish = event.params.finish;
  entity.fee = event.params.fee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
  //Save Pool
  let pool = Pool.load(entity.poolId.toString())
  if(pool === null) {
    pool = new Pool(entity.poolId.toString());
    let lpAddress = fetchLpAddressPool(BigInt.fromI32(entity.poolId));
    let tokenLp = Token.load(lpAddress);
    if (tokenLp === null) {
      tokenLp = new Token(lpAddress);
      tokenLp.name = fetchTokenName(lpAddress);
      tokenLp.symbol = fetchTokenSymbol(lpAddress);
      let decimals = fetchTokenDecimals(lpAddress);
      if (decimals === null) {
        return;
      }
      tokenLp.decimals = decimals;
      tokenLp.save();
    }
    pool.stakeAddress = tokenLp.id;
    //Save tokenRW pool
    let rwAddress = fetchRwAddressPool(BigInt.fromI32(entity.poolId));
    let tokenRw = Token.load(rwAddress);
    if (tokenRw === null) {
      tokenRw = new Token(rwAddress);
      tokenRw.name = fetchTokenName(rwAddress);
      tokenRw.symbol = fetchTokenSymbol(rwAddress);
      let decimals = fetchTokenDecimals(rwAddress);
      if (decimals === null) {
        return;
      }
      tokenRw.decimals = decimals;
      tokenRw.save();
    }
    pool.rewardAddress = tokenRw.id;
    pool.totalStaked = entity.amount;
  } else {
    pool.totalStaked = pool.totalStaked.plus(entity.amount);
  }
  pool.totalReward = ZERO_BI;
  pool.save();

  //Save Term
  let term = Term.load(
    entity.poolId.toString().concat("-").concat(entity.plan.toString())
  )
  if(term === null) {
    term = new Term(
      entity.poolId.toString().concat("-").concat(entity.plan.toString())
    )
    term.apr = fetchApr(BigInt.fromI32(entity.poolId), BigInt.fromI32(entity.plan))
    term.time = fetchTime(BigInt.fromI32(entity.poolId), BigInt.fromI32(entity.plan))
  }
  term.totalStaked = fetchTotalStaked(BigInt.fromI32(entity.poolId), BigInt.fromI32(entity.plan))
  term.totalReward = ZERO_BI
  term.save();
}

export function handleNewbie(event: NewbieEvent): void {
  let entity = new Newbie(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.registerTime = event.params.registerTime;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUnStake(event: UnStakeEvent): void {
  let entity = new UnStake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.start = event.params.start;
  entity.amount = event.params.amount;
  entity.profit = event.params.profit;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  //Update totalReward Pool
  let pool = Pool.load(event.params.poolId.toString())
  if(pool === null) {
    pool = new Pool(event.params.poolId.toString())
    pool.totalReward = entity.profit
  } else {
    pool.totalReward = pool.totalReward.plus(entity.profit)
  }
  pool.save()

  //Update totalReward Term
  let term = Term.load(
    event.params.poolId.toString().concat("-").concat(event.params.plan.toString())
  )
  if(term === null) {
    term = new Term(
      event.params.poolId.toString().concat("-").concat(event.params.plan.toString())
    )
    term.totalReward = entity.profit
  } else {
    term.totalReward = term.totalReward.plus(entity.profit)
  }
  term.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.start = event.params.start;
  entity.poolId = event.params.poolId;
  entity.plan = event.params.plan;
  entity.profit = event.params.profit;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
