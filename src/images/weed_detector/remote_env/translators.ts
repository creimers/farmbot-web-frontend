import {
  WDENVKey,
  TRANSLATORS,
  DEFAULT_FORMATTER,
  SPECIAL_VALUES
} from "../remote_env";
import * as _ from "lodash";

/** Translate values before sending to weed detector. FE => FBOS. */
export function formatEnvKey(key: WDENVKey, value: number) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER).format(key, value);
}

/** Translate values that came from Weed Detector. FBOS => FE. */
export function parseEnvKey(key: WDENVKey, value: string) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER)
    .parse(key, value);
}

