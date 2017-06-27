import {
  WeedDetectorENVKey,
  TRANSLATORS,
  DEFAULT_FORMATTER,
  SPECIAL_VALUES
} from "../remote_env";
import * as _ from "lodash";

/** Translate values before sending to weed detector. FE => FBOS. */
export function formatEnvKey(key: WeedDetectorENVKey, value: number) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER).format(key, value);
}

/** Translate values that came from Weed Detector. FBOS => FE. */
export function parseEnvKey(key: WeedDetectorENVKey, value: string) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER)
    .parse(key, value);
}

/** We only expect certain string values from the weed detector.
 * Tokens like "BOTTOM_RIGHT" or "X" all have a numeric counterpart.
 * This function converts such strings to their numeric equivalent.
 * If a matching numeric code is not found, throws an exception.
 */
export function getSpecialValue(key: string | number):
  SPECIAL_VALUES {

  let k = _.snakeCase(("" + key).toUpperCase()).toUpperCase();
  let v = _.get(SPECIAL_VALUES, k, NaN);

  if (_.isUndefined(v) || _.isNaN(v)) {
    throw new Error("Not a SPECIAL_VALUE: " + k);
  } else {
    return v;
  }
}
