import { devices } from "../../device";
import {
  WeedDetectorENV as ENV,
  DEFAULTS,
  EVERY_KEY,
  WeedDetectorENVKey as ENVKey
} from "./remote_env";
import { CowardlyDictionary as Dictionary, defensiveClone } from "../../util";
import * as _ from "lodash";

export function envSet(key: keyof ENV, value: number) {
  devices.current.setUserEnv({ [key]: JSON.stringify(value) });
}

/** Fetch an item from the ENV vars. Return fallback value if anything goes
 * wrong. */
export function envGet(key: keyof ENV, env: Partial<ENV>): number {
  let candidate = parseInt(JSON.stringify(env[key] || ""), 10);

  return _.isNaN(candidate) ? DEFAULTS[key] : candidate;
}

/** Works on random (possibly malformed) FBOS env vars.
 *  Performs validations and adjustment.
 *  Missing values are converted to defaults*/
export function parseEnv(env: Dictionary<string>): ENV {
  let output = defensiveClone(DEFAULTS);

  EVERY_KEY
    .map(key => ({ key, value: parseEnvKey(key, env[key]) })) // Try to parse
    .filter(data => !_.isUndefined(data.value)) // Filter out null results.
    .map(data => output[data.key] = data.value || output[data.key]); // assign

  return output;
}

/** Takes one single (possibly missing or malformed) ENV var from FBOS and
 * runs validations, fallbacks and adjustments on it. Returns undefined
 * if anything goes wrong. */
export function parseEnvKey(key: ENVKey, val: string | undefined): number | undefined {
  try {
    let maybe = JSON.parse(key);
    if (_.isNumber(maybe) && !_.isNaN(maybe)) {
      return maybe;
    }
  } catch (_err) {
  }
  return undefined;
}
