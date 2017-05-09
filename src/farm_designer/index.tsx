import * as React from "react";
import { GardenMap } from "./map/garden_map";
import { connect } from "react-redux";
import { Link } from "react-router";
import { t } from "i18next";
import { Props, State } from "./interfaces";
import { mapStateToProps } from "./state_to_props";
import { history } from "../history";
import { Plants } from "./plants/plant_inventory";
import { isMobile } from "../util";

// The toggle-able options in the legend
type ShowOptions =
  | "showPlants"
  | "showPoints"
  | "showSpread";

@connect(mapStateToProps)
export class FarmDesigner extends React.Component<Props, Partial<State>> {
  constructor() {
    super();
    this.state = {
      zoomLvl: 0.6,
      showPlants: true,
      showPoints: true,
      showSpread: false
    };
  }

  zoom = (zoomNumber: number) => {
    let zl = this.state.zoomLvl;
    zl && this.setState({ zoomLvl: zl + zoomNumber });
  }

  childComponent() {
    let fallback = isMobile() ?
      undefined : React.createElement(Plants, this.props as any);
    return this.props.children || fallback;
  }

  toggle = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    let name = "show" + _.capitalize(e.currentTarget.name);
    this.setState({ [name]: !this.state[name as ShowOptions] });
  }

  render() {
    // Kinda nasty, similar to the old q="NoTab" we used to determine no panels.
    // This one just makes sure the designer can click it's panel tabs without
    // the other headers getting in the way. There's more re-usability in this.
    if (history.getCurrentLocation().pathname === "/app/designer") {
      document.body.classList.add("designer-tab");
    } else {
      document.body.classList.remove("designer-tab");
    }

    let { zoomLvl, showPlants, showPoints, showSpread } = this.state;

    let plusBtnColor = (zoomLvl && zoomLvl <= 0.9) ? "" : "disabled";
    let minusBtnColor = (zoomLvl && zoomLvl >= 0.4) ? "" : "disabled";

    let plantsBtnColor = showPlants ? "green" : "red";
    let pointsBtnColor = showPoints ? "green" : "red";
    let spreadBtnColor = showSpread ? "green" : "red";

    return <div className="farm-designer">

      <div className="garden-map-legend" style={{ zoom: 1 }}>
        <button className={"plus-button green " + plusBtnColor}
          onClick={() => this.zoom(0.1)}>
          <i className="fa fa-2x fa-plus" />
        </button>
        <button className={"plus-button green " + minusBtnColor}
          onClick={() => this.zoom(-0.1)}>
          <i className="fa fa-2x fa-minus" />
        </button>
        <div className="map-layers">
          <fieldset>
            <label>
              <span>{t("Plants?")}</span>
              <button
                className={"toggle-button " + plantsBtnColor}
                onClick={(e) => this.toggle(e)}
                name={"plants"}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <span>{t("Points?")}</span>
              <button
                className={"toggle-button " + pointsBtnColor}
                onClick={(e) => this.toggle(e)}
                name={"points"}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <span>{t("Spread?")}</span>
              <button
                className={"toggle-button " + spreadBtnColor}
                onClick={(e) => this.toggle(e)}
                name={"spread"}
              />
            </label>
          </fieldset>
        </div>
      </div>

      <div className="panel-header gray-panel designer-mobile-nav">
        <div className="panel-tabs">
          <Link to="/app/designer" className="mobile-only active">
            {t("Designer")}
          </Link>
          <Link to="/app/designer/plants">
            {t("Plants")}
          </Link>
          <Link to="/app/designer/farm_events" >
            {t("Farm Events")}
          </Link>
        </div>
      </div>
      <div className="farm-designer-panels">
        {this.childComponent()}
      </div>

      <div className="farm-designer-map" style={{ zoom: this.state.zoomLvl }}>
        <GardenMap
          showPoints={showPoints}
          showPlants={showPlants}
          showSpread={showSpread}
          selectedPlant={this.props.selectedPlant}
          crops={this.props.crops}
          dispatch={this.props.dispatch}
          designer={this.props.designer}
          plants={this.props.plants}
          points={this.props.points}
        />
      </div>
    </div>
  }
}
