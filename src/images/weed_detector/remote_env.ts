export type WeedDetectorENVKey =
  | "H_HI"
  | "H_LO"
  | "V_HI"
  | "V_LO"
  | "S_HI"
  | "S_LO"
  | "blur"
  | "morph"
  | "iterations"
  | "invert_hue_selection"
  | "calibration_object_separation"
  | "camera_offset_x"
  | "camera_offset_y"
  | "image_bot_origin_location"
  | "coord_scale"
  | "total_rotation_angle";

/**
 * THIS IS WHAT THE STATE LOOKS LIKE ON FARMBOT'S END.
 * Keep this interface up to date
 * */
export type WeedDetectorENV = Record<WeedDetectorENVKey, number>;

