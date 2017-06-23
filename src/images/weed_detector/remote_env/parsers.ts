
import { WeedDetectorENVKey, WeedDetectorENV } from "./interfaces";
import { DEFAULTS, EVERY_KEY } from "./constants";
import { Dictionary } from "farmbot/dist";
import { defensiveClone, betterParseNum } from "../../../util";

/** Works on random (possibly missing, malformed) FBOS env vars.
 *  Performs validations and adjustment.
 *  Missing values are converted to defaults */
export function parseEnv(env: Dictionary<string | undefined>): WeedDetectorENV {
  let output = defensiveClone(DEFAULTS);

  EVERY_KEY
    .map(key => ({ key, value: betterParseNum(env[key], NaN) })) // Try to parse
    .filter(data => !_.isNaN(data.value)) // Filter out bad results.
    .map(data => output[data.key] = data.value || output[data.key]); // assign

  return output;
}

/** Fetch an item from the ENV vars. Return fallback value if anything goes
 * wrong. */
export function envGet(key: WeedDetectorENVKey,
  env: Partial<WeedDetectorENV>): number {
  return betterParseNum(JSON.stringify(env[key] || ""), DEFAULTS[key]);
}
