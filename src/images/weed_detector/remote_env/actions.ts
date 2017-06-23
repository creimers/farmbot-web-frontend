
import { WeedDetectorENVKey, formatEnvKey } from "../remote_env";
import { devices } from "../../../device";

/** Send a number to FBOS for storage on the device. */
export function envSave(key: WeedDetectorENVKey, value: number) {
  devices
    .current
    .setUserEnv({ [key]: JSON.stringify(formatEnvKey(key, value)) });
}
