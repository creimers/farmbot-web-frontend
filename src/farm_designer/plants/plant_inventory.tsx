import * as React from "react";
import { Link } from "react-router";
import { Everything } from "../../interfaces";
import { BetaSelect, Option } from "../../ui";
import { connect } from "react-redux";
import * as moment from "moment";
import { ReactSelectProps } from "react-select";
import { t } from "i18next";

// TODO: Optimize these if possible and relocate them 
interface PlantOptionProps extends Option {
  openfarm_slug: string;
  plant_id: number;
  img_url: string;
  planted_at: string;
  label: string;
}

interface HandleRedirectEvent extends ReactSelectProps {
  plant_id: string;
}

function OptionComponent(props: PlantOptionProps) {
  let {
    openfarm_slug,
    plant_id,
    img_url,
    planted_at,
    label
  } = props;

  let dayPlanted = moment();
  // Same day = 1 !0
  let daysOld = dayPlanted.diff(moment(planted_at), "days") + 1;

  return <div className="plant-search-item">
    <img className="plant-search-item-image" src={img_url} alt={openfarm_slug} />
    <span className="plant-search-item-name">{label}</span>
    <i className="plant-search-item-age">{daysOld} days old</i>
  </div>;
}

@connect((state: Everything) => state)
export class Plants extends React.Component<Everything, {}> {

  handleRedirect(e: HandleRedirectEvent) {
    this.props.router.push(`/app/designer/plants/` + e.plant_id.toString());
  }

  render() {
    let { plants } = this.props.sync;

    let plantOptions = plants.map(plant => {
      return {
        openfarm_slug: plant.openfarm_slug,
        plant_id: plant.id,
        img_url: plant.img_url,
        planted_at: plant.planted_at,
        label: plant.name,
        value: plant.id
      };
    });

    return <div className="panel-container green-panel plant-inventory-panel">
      <div className="panel-header green-panel">
        <div className="panel-tabs">
          <Link to="/app/designer" className="mobile-only">
            {t("Designer")}
          </Link>
          <Link to="/app/designer/plants" className="active">
            {t("Plants")}
          </Link>
          <Link to="/app/designer/farm_events" >
            {t("Farm Events")}
          </Link>
        </div>
      </div>

      <div className="panel-content row">

        <div className="thin-search-wrapper">
          <i className="fa fa-search"></i>
          <BetaSelect dropDownItems={plantOptions}
            optionComponent={OptionComponent}
            onChange={this.handleRedirect.bind(this)}
            isOpen={true}
            placeholder="Search Plants"
          />
        </div>

      </div>

      <Link to="/app/designer/plants/crop_search">
        <div className="plus-button add-plant button-like"
          data-toggle="tooltip"
          title="Add plant">
          <i className="fa fa-2x fa-plus" />
        </div>
      </Link>

    </div>;
  }
};
