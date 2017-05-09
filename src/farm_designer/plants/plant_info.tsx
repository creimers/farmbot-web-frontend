import * as React from "react";
import { connect } from "react-redux";
import { t } from "i18next";
import { Link } from "react-router";
import { TaggedPlant } from "../../resources/tagged_resources";
import { mapStateToProps, formatPlantInfo } from "./map_state_to_props"
import { PlantInfoBase } from "./plant_info_base";
import { PlantPanel } from "./plant_panel";

@connect(mapStateToProps)
export class PlantInfo extends PlantInfoBase {

  default = (plant_info: TaggedPlant) => {
    let info = formatPlantInfo(plant_info);
    return <div className="panel-container green-panel" >
      <div className="panel-header green-panel">
        <p className="panel-title">
          <Link to="/app/designer/plants" className="back-arrow">
            <i className="fa fa-arrow-left" />
          </Link>
          <span className="title">{info.name}</span>
          <Link to={`/app/designer/plants/` + (info.id || "BROKEN")
            .toString() + `/edit`}
            className="right-button">
            {t("Edit")}
          </Link>
        </p>
      </div>
      <PlantPanel info={info} />
    </div>;
  }

  render() {
    let plant_info = this.plant && this.plant
    return plant_info ? this.default(plant_info) : this.fallback();
  }
}
