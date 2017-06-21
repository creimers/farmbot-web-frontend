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

/** THIS IS WHAT THE STATE LOOKS LIKE ON FARMBOT'S END.
 * Keep this interface up to date
 * */
export type WeedDetectorENV = Record<WeedDetectorENVKey, number>;

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
  invert_hue_selection: 0,
  camera_offset_x: 0,
  camera_offset_y: 0,
  coord_scale: 0,
  calibration_object_separation: 0,
  total_rotation_angle: 0,
  calibration_along_axis: SPECIAL_VALUES.X,
  image_bot_origin_location: SPECIAL_VALUES.BOTTOM_LEFT
};
