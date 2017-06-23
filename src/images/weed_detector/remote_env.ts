import { devices } from "../../device";
import { CowardlyDictionary as Dictionary, defensiveClone } from "../../util";
import * as _ from "lodash";

/** I would rather not deal with all the weird edge cases that come with
 * supporting strings and numbers right now. It adds too many edge cases for the
 * FE to validate against. When we need to support text that users will read, I
 * can re-visit this.
 *
 * Please use Enums for now on weed detector.
 * SEE: https://docs.python.org/3/library/enum.html
 */
export enum SPECIAL_VALUES {
  FALSE = 0,
  TRUE = 1,
  TOP_LEFT = 2,
  TOP_RIGHT = 3,
  BOTTOM_LEFT = 4,
  BOTTOM_RIGHT = 5,
  X = 6,
  Y = 7
}

export type WeedDetectorENVKey =
  | "H_HI"
  | "H_LO"
  | "V_HI"
  | "V_LO"
  | "S_HI"
  | "S_LO"
  | "blur"
  | "morph"
  | "iteration"
  | "invert_hue_selection"
  | "camera_offset_x"
  | "camera_offset_y"
  | "coord_scale"
  | "calibration_object_separation"
  | "total_rotation_angle"
  | "calibration_along_axis"
  | "image_bot_origin_location";

/** The runtime equivalent for WeedDetectorENVKey.
 *  Good for iterating and whatnot. */
export let EVERY_KEY: WeedDetectorENVKey[] = [
  "H_HI",
  "H_LO",
  "V_HI",
  "V_LO",
  "S_HI",
  "S_LO",
  "blur",
  "morph",
  "iteration",
  "invert_hue_selection",
  "camera_offset_x",
  "camera_offset_y",
  "coord_scale",
  "calibration_object_separation",
  "total_rotation_angle",
  "calibration_along_axis",
  "image_bot_origin_location"
]

/** Sometimes, ENV var values are not available but rendering must still be
 * performed. This map provides a set of defaults for every ENV var. */
export let DEFAULTS: WeedDetectorENV = {
  H_LO: 30,
  S_LO: 50,
  V_LO: 50,
  H_HI: 90,
  S_HI: 255,
  V_HI: 255,
  blur: 15,
  morph: 6,
  iteration: 4,
  camera_offset_x: 0,
  camera_offset_y: 0,
  coord_scale: 0,
  calibration_object_separation: 0,
  total_rotation_angle: 0,
  invert_hue_selection: SPECIAL_VALUES.FALSE,
  calibration_along_axis: SPECIAL_VALUES.X,
  image_bot_origin_location: SPECIAL_VALUES.BOTTOM_LEFT
};

/** THIS IS WHAT THE STATE LOOKS LIKE ON FARMBOT'S END.
 * Keep this interface up to date */
export type WeedDetectorENV = Record<WeedDetectorENVKey, number>;

type FormatterFn =
  (key: WeedDetectorENVKey, val: number) => string | number | boolean;
type FormatTranslationMap = Partial<Record<WeedDetectorENVKey, FormatterFn>>;

let FORMATTERS: FormatTranslationMap = {
  image_bot_origin_location: (k, v) => {
    switch (v) {
      case SPECIAL_VALUES.BOTTOM_LEFT: return "BOTTOM_LEFT";
      case SPECIAL_VALUES.BOTTOM_RIGHT: return "BOTTOM_RIGHT";
      case SPECIAL_VALUES.TOP_LEFT: return "TOP_LEFT";
      case SPECIAL_VALUES.TOP_RIGHT: return "TOP_RIGHT";
      default: throw new Error("Can't format value: " + v);
    };
  },
  calibration_along_axis: (k, v) => (v === SPECIAL_VALUES.X) ? "X" : "Y",
  invert_hue_selection: (k, v) => (v === SPECIAL_VALUES.TRUE) ? true : false
};

let DEFAULT_FORMATTER: FormatterFn = (key, val) => val;

export function envSet(key: WeedDetectorENVKey, value: number) {
  let formattedValue = (FORMATTERS[key] || DEFAULT_FORMATTER)(key, value);
  devices.current.setUserEnv({ [key]: JSON.stringify(formattedValue) });
}

/** Fetch an item from the ENV vars. Return fallback value if anything goes
 * wrong. */
export function envGet(key: WeedDetectorENVKey,
  env: Partial<WeedDetectorENV>): number {
  let candidate = parseInt(JSON.stringify(env[key] || ""), 10);

  return _.isNaN(candidate) ? DEFAULTS[key] : candidate;
}

/** Works on random (possibly missing, malformed) FBOS env vars.
 *  Performs validations and adjustment.
 *  Missing values are converted to defaults*/
export function parseEnv(env: Dictionary<string>): WeedDetectorENV {
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
export function parseEnvKey(key: WeedDetectorENVKey,
  val: string | undefined): number | undefined {
  try {
    let maybe = JSON.parse(key);
    if (_.isNumber(maybe) && !_.isNaN(maybe)) {
      return maybe;
    }
  } catch (_err) {
  }
  return undefined;
}
