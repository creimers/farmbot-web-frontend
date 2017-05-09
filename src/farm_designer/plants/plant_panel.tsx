import * as React from "react";
import { t } from "i18next";
import { FormattedPlantInfo } from "./map_state_to_props";

interface PlantPanelProps {
  info: FormattedPlantInfo;
  onDestroy?(uuid: string): void;
}

export function PlantPanel({ info, onDestroy }: PlantPanelProps) {
  let destroy = () => onDestroy && onDestroy(info.uuid);
  return <div className="panel-content">
    <label>{t("Plant Info")}</label>
    <ul>
      <li>{t("Started")}: {info.plantedAt}</li>
      <li>{t("Age")}: {info.daysOld}</li>
      <li>{t("Location")}: ({info.x}, {info.y})</li>
    </ul>
    <div>
      <label hidden={!onDestroy}>{t("Delete this plant")}</label>
    </div>
    <button className="red"
      hidden={!onDestroy}
      onClick={destroy}>
      {t("Delete")}
    </button>
  </div>;
}
