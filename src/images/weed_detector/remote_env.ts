/** THIS IS WHAT THE STATE LOOKS LIKE ON FARMBOT'S END. */
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
}
