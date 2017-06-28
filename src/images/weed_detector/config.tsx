import * as React from "react";
import { t } from "i18next";
import { DropDownItem } from "../../ui/fb_select";
import { Row, Col, NULL_CHOICE } from "../../ui/index";
import { FBSelect } from "../../ui/new_fb_select";
import { SettingsMenuProps } from "./interfaces";
import { WD_ENV, SPECIAL_VALUES, envGet } from "./remote_env";
import * as _ from "lodash";
import { BlurableInput } from "../../ui/blurable_input";

let LOOKUP = {
  [SPECIAL_VALUES.X]: {
    label: "X",
    value: SPECIAL_VALUES.X
  },
  [SPECIAL_VALUES.Y]: {
    label: "Y",
    value: SPECIAL_VALUES.Y
  },
  [SPECIAL_VALUES.TOP_LEFT]: {
    label: "Top Left",
    value: SPECIAL_VALUES.TOP_LEFT
  },
  [SPECIAL_VALUES.TOP_RIGHT]: {
    label: "Top Right",
    value: SPECIAL_VALUES.TOP_RIGHT
  },
  [SPECIAL_VALUES.BOTTOM_LEFT]: {
    label: "Bottom Left",
    value: SPECIAL_VALUES.BOTTOM_LEFT
  },
  [SPECIAL_VALUES.BOTTOM_RIGHT]: {
    label: "Bottom Right",
    value: SPECIAL_VALUES.BOTTOM_RIGHT
  },
}

const calibrationAxes: DropDownItem[] = [
  LOOKUP[SPECIAL_VALUES.X],
  LOOKUP[SPECIAL_VALUES.Y]
];

const originLocations: DropDownItem[] = [
  LOOKUP[SPECIAL_VALUES.TOP_LEFT],
  LOOKUP[SPECIAL_VALUES.TOP_RIGHT],
  LOOKUP[SPECIAL_VALUES.BOTTOM_LEFT],
  LOOKUP[SPECIAL_VALUES.BOTTOM_RIGHT],
];

export function WeedDetectorConfig(props: SettingsMenuProps) {
  let NumberBox = ({ conf, label }: {
    conf: keyof WD_ENV;
    label: string;
  }) => {
    return <div>
      <label htmlFor={conf}>
        {label}
      </label>
      <BlurableInput type="number"
        id={conf}
        value={"" + envGet(conf, props.values)}
        onCommit={e => props.onChange(conf, parseInt(e.currentTarget.value, 10))}
        placeholder={label} />
    </div>
  };

  let setDDI = (k: keyof WD_ENV) => (d: DropDownItem) => {
    if (_.isNumber(d.value)) {
      props.onChange(k, d.value);
    } else {
      throw new Error("Weed detector got a non-numeric value");
    }
  }

  let find = (needle: keyof WD_ENV): DropDownItem => {
    return LOOKUP[envGet(needle, props.values)] || NULL_CHOICE;
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
      value={envGet("invert_hue_selection", props.values)}
      onChange={e => props.onChange("invert_hue_selection", e.currentTarget.checked ?
        SPECIAL_VALUES.TRUE : SPECIAL_VALUES.FALSE)} />
    <NumberBox conf={"calibration_object_separation"}
      label={t(`Calibration Object Separation`)} />
    <label>
      {t(`Calibration Object Separation along axis`)}
    </label>
    <FBSelect
      onChange={setDDI("calibration_along_axis")}
      selectedItem={find("calibration_along_axis")}
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
      onChange={setDDI("image_bot_origin_location")}
      selectedItem={find("image_bot_origin_location")}
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
