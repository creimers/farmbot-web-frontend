import * as React from "react";
import { connect } from "react-redux";
import { Pair } from "farmbot";
import { DetectorState } from "../interfaces";
import { TitleBar } from "./title";
import { devices } from "../../device";
import { Row, Col, Widget } from "../../ui/index";
import { t } from "i18next";
import { resetWeedDetection, selectImage, detectWeeds } from "../actions";
import { Progress } from "../../util";
import { HSV } from "../index";
import { FarmwareProps } from "../../devices/interfaces";
import { mapStateToProps } from "../../farmware/state_to_props";
import { ToolTips } from "../../constants";
import { ImageWorkspace } from "./image_workspace";
import { WD_ENV, WDENVKey as ENVKey } from "./remote_env/interfaces";
import { envGet } from "./remote_env/selectors";
import { envSave } from "./remote_env/actions";

@connect(mapStateToProps)
export class WeedDetector
  extends React.Component<FarmwareProps, Partial<DetectorState>> {
  constructor() {
    super();
    this.state = { remoteFarmwareSettings: {} };
  }

  clearWeeds = () => {
    let progress = (p: Readonly<Progress>) => {
      let percentage = `${Math.round((p.completed / p.total) * 100)} %`;
      this.setState({ deletionProgress: p.isDone ? "" : percentage });
    };
    this.props.dispatch(resetWeedDetection(progress));
    this.setState({ deletionProgress: "Deleting..." });
  }

  /** Mapping of HSV values to FBOS Env variables. */
  CHANGE_MAP: Record<HSV, [ENVKey, ENVKey]> = {
    H: ["CAMERA_CALIBRATION_H_LO", "CAMERA_CALIBRATION_H_HI"],
    S: ["CAMERA_CALIBRATION_S_LO", "CAMERA_CALIBRATION_S_HI"],
    V: ["CAMERA_CALIBRATION_V_LO", "CAMERA_CALIBRATION_V_LO"]
  }

  test = () => {
    let settings = this.props.env;
    let pairs = Object
      .keys(settings)
      .map<Pair>(function (value: keyof typeof settings, index) {
        let label = JSON.stringify(settings[value]) || "null";
        return { kind: "pair", args: { value, label } };
      });
    devices.current.execScript("plant-detection", pairs);
  }

  render() {
    return <Widget className="weed-detector-widget coming-soon">
      <Row>
        <Col>
          <TitleBar
            onDeletionClick={this.clearWeeds}
            deletionProgress={this.state.deletionProgress}
            onSave={() => { throw new Error("NEVER @@") }}
            onTest={this.test}
            title={"Weed Detector"}
            help={t(ToolTips.WEED_DETECTOR)}
            env={this.props.env}
          />
          <Row>
            <Col sm={12}>
              onFlip
              onProcessPhoto
              currentImage
              images
              onChange
              <ImageWorkspace
                onProcessPhoto={(id) => { this.props.dispatch(detectWeeds(id)); }}
                onFlip={(uuid) => this.props.dispatch(selectImage(uuid))}
                currentImage={this.props.currentImage}
                images={this.props.images}
                onChange={() => {
                  envSave;
                }}
                iteration={-123}
                morph={-123}
                blur={-123}
                H_LO={envGet("CAMERA_CALIBRATION_H_LO", this.props.env)}
                H_HI={envGet("CAMERA_CALIBRATION_H_HI", this.props.env)}
                S_LO={envGet("CAMERA_CALIBRATION_S_LO", this.props.env)}
                S_HI={envGet("CAMERA_CALIBRATION_S_HI", this.props.env)}
                V_LO={envGet("CAMERA_CALIBRATION_V_LO", this.props.env)}
                V_HI={envGet("CAMERA_CALIBRATION_V_HI", this.props.env)} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>;
  }
}
