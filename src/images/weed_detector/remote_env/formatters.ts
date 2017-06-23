import { devices } from "../../../device";
import { WeedDetectorENVKey, TRANSLATORS, DEFAULT_FORMATTER } from "../remote_env";

/** Translate values. FE => FBOS. */
export function formatEnvKey(key: WeedDetectorENVKey, value: number) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER).format(key, value);
}

/** Translate values. FBOS => FE. */
export function parseEnvKey(key: WeedDetectorENVKey, value: string) {
  return (TRANSLATORS[key] || DEFAULT_FORMATTER).parse(key, value);
}
