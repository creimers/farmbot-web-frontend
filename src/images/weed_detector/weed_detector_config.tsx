import * as React from "react";
import { t } from "i18next";
import { DropDownItem, DeprecatedFBSelect } from "../../ui/fb_select";
import { Row, Col } from "../../ui/index";
import { FBSelect } from "../../ui/new_fb_select";
import { SettingsMenuProps } from "./interfaces";
import { WeedDetectorENV } from "./remote_env";

const calibrationAxes: DropDownItem[] = [
  { label: "X", value: "x" }, { label: "Y", value: "y" }
];

const originLocations: DropDownItem[] = [
  { label: "Top Left", value: "top_left" },
  { label: "Top Right", value: "top_right" },
  { label: "Bottom Left", value: "bottom_left" },
  { label: "Bottom Right", value: "bottom_right" }
];

export function WeedDetectorConfig(props: SettingsMenuProps) {
  let NumberBox = ({ conf, label }: {
    conf: keyof WeedDetectorENV;
    label: string;
  }) => {
    return <div>
      <label htmlFor={conf}>
        {label}
      </label>
      <input type="number"
        id={conf}
        value={props.values[conf]}
        onBlur={e => props.onChange(conf, parseInt(e.currentTarget.value, 10))}
        placeholder={label} />
    </div>
  }
  return <div className="additional-settings-menu"
    onClick={(e) => e.stopPropagation()}>
    {/* This menu needs to be nested in the <i> for css purposes. However,
        * we do not want events in here to bubble up to the toggle method. */}
    <label htmlFor="invert_hue_selection">
      {t(`Invert Hue Range Selection`)}
    </label>
    <input
      type="checkbox"
      id="invert_hue_selection"
      value={!!props.values.invert_hue_selection ? 1 : 0}
      onChange={e => props.onChange("invert_hue_selection", e.currentTarget.checked ? 1 : 0)} />
    <NumberBox conf={"calibration_object_separation"}
      label={t(`Calibration Object Separation`)} />
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
        <NumberBox conf={"camera_offset_x"} label={t(`Camera Offset X`)} />
      </Col>
      <Col xs={6}>
        <NumberBox conf={"camera_offset_y"} label={t(`Camera Offset Y`)} />
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
        <NumberBox conf={"coord_scale"} label={t(`Pixel coordinate scale`)} />
      </Col>
      <Col xs={6}>
        <NumberBox conf={"total_rotation_angle"} label={t(`Camera rotation`)} />
      </Col>
    </Row>
  </div>;
};
