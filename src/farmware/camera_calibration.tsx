import * as React from "react";
import { t } from "i18next";
import { Widget, Row, Col } from "../ui/index";
import { CameraCalibrationState, CameraCalibrationProps } from "./interfaces";
import { TitleBar } from "../images/weed_detector/title";
import { ImageWorkspace } from "../images/weed_detector/image_workspace";
import { ToolTips } from "../constants";
import { envSave } from "../images/weed_detector/remote_env/actions";

export class CameraCalibration
  extends React.Component<CameraCalibrationProps, CameraCalibrationState> {
  constructor() {
    super();
    this.state = { settingsMenuOpen: false };
  }

  toggleSettingsMenu = () => {
    this.setState({ settingsMenuOpen: !this.state.settingsMenuOpen });
  }

  calibrate = () => {
    console.log("TODO: Send RPC / farmware activation message here.");
  }

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
            env={this.props.env}
          />
          <Row>
            <Col sm={12}>
              <ImageWorkspace
                onProcessPhoto={this.props.onProcessPhoto}
                onFlip={(u) => { this.props }}
                images={this.props.images}
                currentImage={this.props.currentImage}
                onChange={() => {
                  envSave;
                }}
                iteration={-123}
                morph={-123}
                blur={-123}
                H_LO={this.props.H_LO}
                S_LO={this.props.S_LO}
                V_LO={this.props.V_LO}
                H_HI={this.props.H_HI}
                S_HI={this.props.S_HI}
                V_HI={this.props.V_HI}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>
  }
}
