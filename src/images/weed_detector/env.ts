import { box as box_, Box } from "boxed_value";
import { WeedDetectorENV } from "./remote_env";
import { Dictionary } from "farmbot/dist";

/** Tries its hardest to deserialize FarmBot's weed detector ENV vars.
 * If that fails for any reason, you get a {} instead of a real set of vars.
 */
export function weedDetectorENVsafeFetch(env: string | undefined): Partial<WeedDetectorENV> {
  var b: Box = box_(undefined);
  try {
    b = box_(JSON.parse(JSON.stringify(env)));
  } finally {
    return (b.kind === "object") ? b.value : {};
  };
}

/** Farmbot OS stores everything as a string. We need to convert that to
 * numbers.
 */
function unpackEnv(input: Dictionary<string | boolean | number>): WeedDetectorENV {
  let env: Dictionary<number> = {};
  Object
    .keys(input)
    .map(name => {
      let box: Box;
      try {
        box = box_(JSON.parse("" + input[name]))
      } catch (error) {
        box = box_(undefined);
      }
      return { name, box }
    })
    .map(x => {
      switch (x.obj.kind) {

      }
    });
  return {}
}
