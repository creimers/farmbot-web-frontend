import { Log } from "../interfaces";
import { API } from "../api";
import * as axios from "axios";
import { Sequence } from "../sequences/interfaces";
import { Tool, ToolSlot } from "../tools/interfaces";
import { Regimen } from "../regimens/interfaces";
import { Peripheral } from "../controls/peripherals/interfaces";
import { FarmEvent, Plant, Point, Crop } from "../farm_designer/interfaces";
import { Image } from "../images/interfaces";
import { DeviceAccountSettings } from "../devices/interfaces";
import { ResourceName } from "../resources/tagged_resources";
import { warning } from "../ui/logger";
import { OpenFarmAPI } from "../open_farm/index";

export interface ResourceReadyPayl {
  name: ResourceName;
  data: object[];
}

export interface SyncResponse {
  type: "RESOURCE_READY";
  payload: ResourceReadyPayl;
}

export function fetchDeprecatedSyncData(dispatch: Function) {
  let fetch = <T>(name: ResourceName, url: string, type = "RESOURCE_READY") =>
    axios
      .get<T>(url)
      .then((r): SyncResponse => dispatch({
        type, payload: { name, data: r.data }
      }), fail);

  let fail = () => warning("Please try refreshing the page.",
    "Error downloading data");

  fetch<DeviceAccountSettings>("device", API.current.devicePath)
  fetch<FarmEvent[]>("farm_events", API.current.farmEventsPath);
  fetch<Image[]>("images", API.current.imagesPath);
  fetch<Log[]>("logs", API.current.logsPath);
  fetch<Peripheral[]>("peripherals", API.current.peripheralsPath);
  fetch<Plant[]>("plants", API.current.plantsPath)
    .then(action => {
      let slugs = _(action.payload.data)
        .pluck<string>("openfarm_slug")
        .uniq()
        .compact()
        .value();
      slugs.map((slug) => {
        let url = OpenFarmAPI.OFBaseURL + slug;
        fetch<Crop>("crops", url, "SAVE_SPECIAL_RESOURCE");
      })
    });
  fetch<Point[]>("points", API.current.pointsPath);
  fetch<Regimen[]>("regimens", API.current.regimensPath);
  fetch<Sequence[]>("sequences", API.current.sequencesPath);
  fetch<Tool[]>("tools", API.current.toolsPath);
  fetch<ToolSlot[]>("tool_slots", API.current.toolSlotsPath);
}

export function fetchDeprecatedSyncDataOk(payload: {}) {
  return {
    type: "FETCH_SYNC_OK", payload
  };
}

export function fetchDeprecatedSyncDataNo(err: Error) {
  return {
    type: "FETCH_SYNC_NO",
    payload: {}
  };
}
