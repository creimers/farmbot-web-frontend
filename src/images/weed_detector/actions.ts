import { devices } from "../../device";
import { WeedDetectorENV as ENV } from "./remote_env";

export function envSet(key: keyof ENV, value: number) {
  devices.current.setUserEnv({ [key]: JSON.stringify(value) });
}
