import { devices } from "../../device";
import { WeedDetectorENV as ENV, DEFAULTS } from "./remote_env";
import { CowardlyDictionary } from "../../util";
import * as _ from "lodash";

export function envSet(key: keyof ENV, value: number) {
  devices.current.setUserEnv({ [key]: JSON.stringify(value) });
}

export function envGet(key: keyof ENV,
  env: CowardlyDictionary<string | number>): number {
  let candidate = parseInt(JSON.stringify(env[key] || ""), 10);

  return _.isNaN(candidate) ? DEFAULTS[key] : candidate;
}
