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
import { WeedDetectorBody } from "./body";
import {
  WeedDetectorENV,
  envSet,
  WeedDetectorENVKey as ENVKey
} from "./remote_env";

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
    H: ["H_LO", "H_HI"],
    S: ["S_LO", "S_HI"],
    V: ["V_LO", "V_LO"]
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
          />
          <Row>
            <Col sm={12}>
              <WeedDetectorBody
                onProcessPhoto={(id) => { this.props.dispatch(detectWeeds(id)); }}
                onFlip={(uuid) => this.props.dispatch(selectImage(uuid))}
                currentImage={this.props.currentImage}
                images={this.props.images}
                onSliderChange={envSet}
                H_LO={this.props.env.H_LO}
                H_HI={this.props.env.H_HI}
                S_LO={this.props.env.S_LO}
                S_HI={this.props.env.S_HI}
                V_LO={this.props.env.V_LO}
                V_HI={this.props.env.V_HI} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>;
  }
}
