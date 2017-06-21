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

  STUBS = { H: [0], S: [0], V: [0] }

  render() {
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
                H={this.STUBS.H}
                S={this.STUBS.S}
                V={this.STUBS.V}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>
  }
}
