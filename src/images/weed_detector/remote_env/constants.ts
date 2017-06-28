import {
  WD_ENV,
  FormatTranslationMap,
  WDENVKey,
  getSpecialValue,
  Translation
} from "../remote_env";
import { box } from "boxed_value";

/** I would rather not deal with all the weird edge cases that come with
 * supporting strings and numbers right now. It adds too many edge cases for the
 * FE to validate against. Example: Needing to conditionally determine if an ENV
 * key is string vs. number vs. bool. Using only numbers (and translating values
 * when transmitting) allows us to minimize the use of such conditionals.
 * When we need to support text that users will read, I can re-visit this. */
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

/** The runtime equivalent for WeedDetectorENVKey.
 *  Good for iterating and whatnot. */
export const EVERY_KEY: WDENVKey[] = [
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
export const DEFAULTS: WD_ENV = {
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

export const DEFAULT_FORMATTER: Translation = {
  format: (key, val): number | string => {
    switch (key) {
      case "invert_hue_selection":
      case "calibration_along_axis":
      case "image_bot_origin_location":
        return ("" + (SPECIAL_VALUES[val] || val));
      default:
        return val;
    }
  },
  parse: (key, val) => {
    try {
      const b = box(JSON.parse(val));
      switch (b.kind) {
        case "number":
          return b.value;
        case "boolean":
        case "string":
          return getSpecialValue(val);
        default:
          throw new Error("BAD DATA TYPE");
      }

    } catch (error) {
      throw new Error(`An input from FarmWare caused a crash.
      This is the value we got: ${val}
      This is the error: ${error}
      `);
    }
  }
};
/** If we hit any "special cases", we can register them here. */
export const TRANSLATORS: FormatTranslationMap = {};
