import * as Axios from "axios";
import * as _ from "lodash";
import { OpenFarm, CropSearchResult } from "./openfarm";
import { DEFAULT_ICON } from "../open_farm/index";

interface OpenFarmSearchQueryParams {
  value: string;
  dispatch: Function;
}

let url = (q: string) => `${OpenFarm.cropUrl}?include=pictures&filter=${q}`;

let openFarmSearchQuery = _.throttle((q: string) =>
  Axios.get<CropSearchResult>(url(q)), 800);

export let OFSearch = (e: React.FormEvent<HTMLInputElement>) =>
  (dispatch: Function) => {
    let { value } = e.currentTarget;
    dispatch({ type: "SEARCH_QUERY_CHANGE", payload: value });
    openFarmSearchQuery(value)
      .then(resp => {
        let images: { [key: string]: string } = {};
        _.get<OpenFarm.Included[]>(resp, "data.included", [])
          .map(item => {
            return { id: item.id, url: item.attributes.thumbnail_url };
          })
          .map((val, acc) => images[val.id] = val.url);
        let payload = resp.data.data.map(datum => {
          let crop = datum.attributes;
          let id = _.get(datum, "relationships.pictures.data[0].id", "");
          return { crop, image: (images[id] || DEFAULT_ICON) };
        });
        dispatch({ type: "OF_SEARCH_RESULTS_OK", payload });
      });
  };
