import * as React from "react";
import { BackArrow } from "../../ui";
import { Everything } from "../../interfaces";
import { connect } from "react-redux";
import { t } from "i18next";
import { OpenFarmResults } from "./openfarm_search_results";
import { SpeciesCatalogProps } from "../interfaces";
import { OFSearch } from "../util";

export function mapStateToProps(props: Everything): SpeciesCatalogProps {
  return {
    OFSearch,
    cropSearchQuery: props.resources.consumers.farm_designer.cropSearchQuery,
    dispatch: Function,
    cropSearchResults: props
      .resources
      .consumers
      .farm_designer
      .cropSearchResults || []
  };
}

@connect(mapStateToProps)
export class SpeciesCatalog extends React.Component<SpeciesCatalogProps, {}> {
  render() {
    return <div className="panel-container green-panel species-catalog-panel">
      <div className="panel-header green-panel">
        <p className="panel-title">
          <BackArrow /> {t("Choose a species")}
        </p>
      </div>
      <div className="panel-top">
        <div className="thin-search-wrapper">
          <div className="text-input-wrapper">
            <i className="fa fa-search"></i>
            <div className="thin-search">
              <input
                value={this.props.cropSearchQuery}
                onChange={e => this.props.OFSearch(e)(this.props.dispatch)}
                className="search"
                placeholder="Search OpenFarm"
              />
            </div>
          </div>
        </div>
        <div className="panel-content">
          <div className="crop-search-result-wrapper row">
            <OpenFarmResults cropSearchResults={this.props.cropSearchResults} />
          </div>
        </div>
      </div>
    </div>;
  }
}
