import * as React from "react";
import { connect } from "react-redux";
import { Pair } from "farmbot";
import { success, error } from "farmbot-toastr";
import { DetectorState } from "../interfaces";
import { TitleBar } from "./weed_detector_title";
import { devices } from "../../device";
import { Row, Col, Widget } from "../../ui/index";
import { t } from "i18next";
import { resetWeedDetection, selectImage, detectWeeds } from "../actions";
import { Progress } from "../../util";
import { HSV } from "../index";
import { FarmwareProps } from "../../devices/interfaces";
import { mapStateToProps } from "../../farmware/state_to_props";
import { ToolTips } from "../../constants";
import { WeedDetectorBody } from "./weed_detector_body";
import { WeedDetectorENV } from "./remote_env";
const PLANT_DETECTION_OPTIONS_KEY = "PLANT_DETECTION_options";

@connect(mapStateToProps)
export class WeedDetector
  extends React.Component<FarmwareProps, Partial<DetectorState>> {
  constructor() {
    super();
    this.state = { remoteFarmwareSettings: {} };
  }

  /** Attempts to deserialize data on the device.
   * Returns {} as Partial<WeedDetectorENV> if anything goes wrong. */
  get optionsOnDevice(): Partial<WeedDetectorENV> {
    let { user_env } = this.props.bot.hardware;
    let jsonString = user_env[PLANT_DETECTION_OPTIONS_KEY] || "{}";
    try { return JSON.parse(jsonString) } catch (e) { return {}; }
  }

  get farmwareSettings() {
    return { ...this.optionsOnDevice, ...this.state.remoteFarmwareSettings };
  }

  componentDidMount() {
    const IS_ONLINE = !!this
      .props
      .bot
      .hardware
      .user_env["LAST_CLIENT_CONNECTED"];
    const NEEDS_SETUP = !!Object.keys(this.optionsOnDevice).length;
    let remoteFarmwareSettings = this.farmwareSettings;
    (IS_ONLINE && NEEDS_SETUP) ?
      this.saveSettings() : this.setState({ remoteFarmwareSettings });
  }

  clearWeeds = () => {
    let progress = (p: Readonly<Progress>) => {
      let percentage = `${Math.round((p.completed / p.total) * 100)} %`;
      this.setState({ deletionProgress: p.isDone ? "" : percentage });
    };
    this.props.dispatch(resetWeedDetection(progress));
    this.setState({ deletionProgress: "Deleting..." });
  }

  saveSettings = () => {
    let nextEnv = {
      [PLANT_DETECTION_OPTIONS_KEY]: JSON.stringify(this.farmwareSettings)
    };

    let ok = () => success(t("Settings saved."));
    let no = () => error(t("Settings NOT saved."));

    devices.current.setUserEnv(nextEnv).then(ok, no);
  }

  sliderChange = (key: keyof HSV<"">, values: [number, number]) => {
    let oldSettings = this.farmwareSettings;
    let newSettings = { [key]: values };
    let remoteFarmwareSettings = { ...oldSettings, ...newSettings };
    this.setState({ remoteFarmwareSettings });
  }

  test = () => {
    let settings = this.farmwareSettings;
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
            onSave={this.saveSettings}
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
                onSliderChange={this.sliderChange}
                H={[this.farmwareSettings.H_LO, this.farmwareSettings.H_HI]}
                S={[this.farmwareSettings.S_LO, this.farmwareSettings.S_HI]}
                V={[this.farmwareSettings.V_LO, this.farmwareSettings.V_HI]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Widget>;
  }
}
