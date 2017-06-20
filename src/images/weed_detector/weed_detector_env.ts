import { box, Box } from "boxed_value";
import { WeedDetectorENV } from "./remote_env";

/** Tries its hardest to deserialize FarmBot's weed detector ENV vars.
 * If that fails for any reason, you get a {} instead of a real set of vars.
 */
export function weedDetectorENVsafeFetch(env: string | undefined): Partial<WeedDetectorENV> {
  var b: Box = box(undefined);
  try {
    b = box(JSON.parse(JSON.stringify(env)));
  } finally {
    return (b.kind === "object") ? b.value : {};
  };
}
