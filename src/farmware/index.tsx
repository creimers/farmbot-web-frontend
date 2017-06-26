import * as React from "react";
import { connect } from "react-redux";
import { Page, Col, Row } from "../ui/index";
import { FarmwarePanel } from "./farmware_panel";
import { mapStateToProps } from "./state_to_props";
import { Photos } from "./photos";
import { CameraCalibration } from "./camera_calibration";
import { FarmwareProps } from "../devices/interfaces";
import { detectWeeds } from "../images/actions";
import { WeedDetector } from "../images/weed_detector/index";
import { envGet } from "../images/weed_detector/remote_env";

@connect(mapStateToProps)
export class FarmwarePage extends React.Component<FarmwareProps, void> {
  render() {
    return <Page className="farmware">
      <Row>
        <Col xs={12} sm={7}>
          <Photos
            dispatch={this.props.dispatch}
            images={this.props.images}
            currentImage={this.props.currentImage} />
        </Col>
        <Col xs={12} sm={4}>
          <FarmwarePanel
            syncStatus={this.props.syncStatus}
            farmwares={this.props.farmwares} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={5}>
          <CameraCalibration
            onProcessPhoto={(id) => { this.props.dispatch(detectWeeds(id)); }}
            currentImage={this.props.currentImage}
            images={this.props.images}
            env={this.props.env}
            H_LO={envGet("H_LO", this.props.env)}
            S_LO={envGet("S_LO", this.props.env)}
            V_LO={envGet("V_LO", this.props.env)}
            H_HI={envGet("H_HI", this.props.env)}
            S_HI={envGet("S_HI", this.props.env)}
            V_HI={envGet("V_HI", this.props.env)} />
        </Col>
        <Col xs={12} sm={5} smOffset={1}>
          <WeedDetector {...this.props} />
        </Col>
      </Row>
    </Page>;
  }
};
