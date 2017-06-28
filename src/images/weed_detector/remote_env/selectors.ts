
import { WDENVKey, WD_ENV } from "./interfaces";
import { DEFAULTS, EVERY_KEY } from "./constants";
import { Dictionary } from "farmbot/dist";
import { defensiveClone, betterParseNum } from "../../../util";
import { DropDownItem } from "../../../ui/fb_select";
import { NULL_CHOICE } from "../../../ui/index";

/** Given a half formed set of weed detector environment variables, creates a
 * fully formed set of environment variables. When a variable is missing, it is
 * replaced with a default value. */
export function prepopulateEnv(env: Dictionary<string | undefined>): WD_ENV {
  let output = defensiveClone(DEFAULTS);
  EVERY_KEY.map(key => {
    output[key] = betterParseNum(env[key], DEFAULTS[key]);
  });
  return output;
}

/** Given a half-formed set of ENV vars, makes a best effort attempt to find
 * the corresponding value. When lookup fails, provide a sane default value. */
export function envGet(key: WDENVKey, env: Partial<WD_ENV>): number {
  return betterParseNum(JSON.stringify(env[key] || ""), DEFAULTS[key]);
}
