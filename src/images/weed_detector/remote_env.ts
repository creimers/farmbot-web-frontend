/**
 * THIS IS WHAT THE STATE LOOKS LIKE ON FARMBOT'S END.
 * Keep this interface up to date
 * */
export interface WeedDetectorENV {
  /** High hue (HSV) setting */
  H_HI: number;
  /** Low hue (HSV) setting */
  H_LO: number;
  /** High value (HSV) setting */
  V_HI: number;
  /** Low value (HSV) setting */
  V_LO: number;
  /** High saturation (HSV) setting */
  S_HI: number;
  /** Low saturation (HSV) setting */
  S_LO: number;
  blur: number;
  morph: number;
  iterations: number;
  /** Calibration settings */
  invert_hue_selection: number;
  calibration_object_separation: number;
  camera_offset_x: number;
  camera_offset_y: number;
  image_bot_origin_location: number;
  coord_scale: number;
  total_rotation_angle: number;
}

export type WeedDetectorENVKey = keyof WeedDetectorENV;
