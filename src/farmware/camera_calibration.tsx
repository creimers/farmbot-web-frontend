import * as React from "react";
import { t } from "i18next";
import { Widget, Row, Col } from "../ui/index";
import { CameraCalibrationState, CameraCalibrationProps } from "./interfaces";
import { TitleBar } from "../images/weed_detector/title";
import { WeedDetectorBody } from "../images/weed_detector/body";
import { ToolTips } from "../constants";

export class CameraCalibration
  extends React.Component<CameraCalibrationProps, CameraCalibrationState> {
  constructor() {
    super();
    this.state = { settingsMenuOpen: false };
  }

  toggleSettingsMenu = () => {
    this.setState({ settingsMenuOpen: !this.state.settingsMenuOpen });
  }

  sliderChange = () => { }

  calibrate = () => { }

  render() {
    console.warn("Need to transfer the correct " +
      "props to <WeedDetectorBody/>!! - RC")
    return <Widget className="weed-detector-widget">
      <Row>
        <Col>
          <TitleBar
            title={"Camera Calibration"}
            help={t(ToolTips.CAMERA_CALIBRATION)}
            settingsMenuOpen={!!this.state.settingsMenuOpen}
            onSettingToggle={this.toggleSettingsMenu}
            onCalibrate={this.calibrate}
          />
          <Row>
            <Col sm={12}>
              <WeedDetectorBody
                onProcessPhoto={this.props.onProcessPhoto}
                onFlip={(u) => { this.props }}
                images={this.props.images}
                currentImage={this.props.currentImage}
                onSliderChange={this.sliderChange}
                H_LO={-1}
                S_LO={-1}
                V_LO={-1}
                H_HI={-1}
                S_HI={-1}
                V_HI={-1}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>
  }
}
