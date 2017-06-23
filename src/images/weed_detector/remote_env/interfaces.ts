/** Name of every env var that the weed detector farmware needs. */
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

export type WeedDetectorENV = Record<WeedDetectorENVKey, number>;

/** We only allow FBOS to send us these types. */
export type ALLOWED_TYPES = string | number | boolean;

/** Takes an interally formatted ENV var and formats it in a way that is useful
 * for the weed detector expects. Eg, convert 0 to "true". */
export type FormatterFn =
  (key: WeedDetectorENVKey, val: number) => ALLOWED_TYPES;

/** Takes a value from the outside world and parses it for use within this app.
 * Example: Turn "top right" into the number 3. */
export type ParserFn =
  (key: WeedDetectorENVKey, val: string) => number;

/** Object that contains two functions for translation of ENV variable keys. */
export interface Translation {
  /** Translate to output. FE => FBOS */
  format: FormatterFn;
  /** Translate to input. FBOS => FE */
  parse: ParserFn;
}

/** List of "special case" ENV vars from the weed detector that require
 * extra translation. */
export type FormatTranslationMap =
  Partial<Record<WeedDetectorENVKey, Translation>>;
