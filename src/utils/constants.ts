import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const STATUS_TRADING = "TRADING";
export const STATUS_REPORTING = "REPORTING";
export const STATUS_DISPUTING = "DISPUTING";
export const STATUS_FINALIZED = "FINALIZED";
export const STATUS_SETTLED = "SETTLED";
export let BIGINT_ZERO = BigInt.fromI32(0);
export let BIGINT_ONE = BigInt.fromI32(1);
export let BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
let marketTypes = new Array<String>(3);
marketTypes.push("YES_NO");
marketTypes.push("CATEGORICAL");
marketTypes.push("SCALAR");
let tokenTypes = new Array<String>(3);
marketTypes.push("REPUTATION_TOKEN");
marketTypes.push("DISPUTE_CROWDSOURCER");
marketTypes.push("PARTICIPATION_TOKEN");
export { tokenTypes, marketTypes };
