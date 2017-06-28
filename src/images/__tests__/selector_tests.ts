import { prepopulateEnv, DEFAULTS, envGet } from "../weed_detector/remote_env";

describe("populateEnv()", () => {
  it("sets values", () => {
    let result = prepopulateEnv({ calibration_object_separation: "12" });
    expect(result.CAMERA_CALIBRATION_calibration_object_separation).toEqual(12);
  });

  it("Falls back on defaults", () => {
    let result = prepopulateEnv({});
    let actual = result.CAMERA_CALIBRATION_calibration_object_separation;
    let expected = DEFAULTS.CAMERA_CALIBRATION_calibration_object_separation;
    expect(actual).toEqual(expected);
  });
});

describe("envGet()", () => {
  let myEnv = {
    "H_LO": 30,
    "S_LO": 50,
    "V_LO": 50,
    "H_HI": 90,
    "S_HI": 255,
    "V_HI": 255,
    "blur": 15,
    "morph": 6,
    "iteration": 4,
    "camera_offset_x": 0,
    "camera_offset_y": 0,
    "coord_scale": 0,
    "calibration_object_separation": 29,
    "total_rotation_angle": 0,
    "invert_hue_selection": 0,
    "calibration_along_axis": 6,
    "image_bot_origin_location": 4
  };

  it("grabs current value", () => {
    let result = envGet("CAMERA_CALIBRATION_calibration_object_separation",
      myEnv);
    expect(result).toEqual(29);
  })
})
