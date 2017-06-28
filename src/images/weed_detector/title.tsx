import * as React from "react";
import { t } from "i18next";
import { WeedDetectorConfig } from "./config";
import { WidgetHeader } from "../../ui/index";
import { WD_ENV } from "./remote_env/interfaces";
import { envSave } from "./remote_env/actions";

interface Props {
  onSave?(): void;
  onTest?(): void;
  onSettingToggle?(): void;
  onDeletionClick?(): void;
  onCalibrate?(): void;
  deletionProgress?: string | undefined;
  settingsMenuOpen?: boolean;
  title: string;
  help: string;
  env: Partial<WD_ENV>;
}

export function TitleBar({
  onSave,
  onTest,
  settingsMenuOpen,
  onSettingToggle,
  deletionProgress,
  onDeletionClick,
  onCalibrate,
  env,
  title,
  help
}: Props) {
  return <WidgetHeader helpText={help} title={title}>
    <button
      hidden={!onSave}
      onClick={onSave}
      className="green">
      {t("SAVE")}
    </button>
    <button
      hidden={!onTest}
      onClick={onTest}
      className="yellow">
      {t("TEST")}
    </button>
    <button
      hidden={!onDeletionClick}
      onClick={onDeletionClick}
      className="red">
      {deletionProgress || t("CLEAR WEEDS")}
    </button>
    <button
      hidden={!onCalibrate}
      onClick={() => { }}
      className="green">
      {t("Calibrate")}
    </button>
    {onSettingToggle &&
      <i
        onClick={onSettingToggle}
        className="fa fa-cog" >
        {settingsMenuOpen && <WeedDetectorConfig
          values={env}
          onChange={envSave} />}
      </i>
    }
  </WidgetHeader>;
}
