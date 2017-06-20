import * as React from "react";
import { t } from "i18next";
import { DropDownItem, DeprecatedFBSelect } from "../../ui/fb_select";
import { Row, Col } from "../../ui/index";
import { FBSelect } from "../../ui/new_fb_select";

const calibrationAxes: DropDownItem[] = [
  { label: "X", value: "x" }, { label: "Y", value: "y" }
];

const originLocations: DropDownItem[] = [
  { label: "Top Left", value: "top_left" },
  { label: "Top Right", value: "top_right" },
  { label: "Bottom Left", value: "bottom_left" },
  { label: "Bottom Right", value: "bottom_right" }
];

export const additionalSettingsMenu = () => {
  return <div className="additional-settings-menu"
    onClick={(e) => e.stopPropagation()}>
    {/* This menu needs to be nested in the <i> for css purposes. However,
        * we do not want events in here to bubble up to the toggle method. */}
    <label htmlFor="invert_hue_selection">
      {t(`Invert Hue Range Selection`)}
    </label>
    <input type="checkbox" id="invert_hue_selection" />
    <label htmlFor="calibration_object_separation">
      {t(`Calibration Object Separation`)}
    </label>
    <input type="number" id="calibration_object_separation"
      placeholder="(Number)" />
    <label>
      {t(`Calibration Object Separation along axis`)}
    </label>
    <FBSelect
      onChange={(x) => { }}
      selectedItem={undefined}
      list={calibrationAxes}
      placeholder="Select..." />
    <Row>
      <Col xs={6}>
        <label htmlFor="camera_offset_x">
          {t(`Camera Offset X`)}
        </label>
        <input type="number" id="camera_offset_x" placeholder="(Number)" />
      </Col>
      <Col xs={6}>
        <label htmlFor="camera_offset_y">
          {t(`Camera Offset Y`)}
        </label>
        <input type="number" id="camera_offset_y" placeholder="(Number)" />
      </Col>
    </Row>
    <label htmlFor="image_bot_origin_location">
      {t(`Origin Location in Image`)}
    </label>
    <FBSelect
      list={originLocations}
      onChange={() => { }}
      selectedItem={undefined}
      placeholder="Select..." />
    <Row>
      <Col xs={6}>
        <label htmlFor="coord_scale">
          {t(`Pixel coordinate scale`)}
        </label>
        <input type="number" id="coord_scale"
          placeholder="(Number)" step={0.10} />
      </Col>
      <Col xs={6}>
        <label htmlFor="total_rotation_angle">
          {t(`Camera rotation`)}
        </label>
        <input type="number" id="total_rotation_angle" placeholder="(Number)" />
      </Col>
    </Row>
  </div>;
};
