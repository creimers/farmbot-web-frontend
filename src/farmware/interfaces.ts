import { BotState } from "../devices/interfaces";
import { TaggedImage } from "../resources/tagged_resources";
import { SyncStatus, Dictionary, FarmwareManifest } from "farmbot/dist";

export interface FWState {
  selectedFarmware: string | undefined;
  packageUrl: string | undefined;
}

export interface FWProps {
  syncStatus: SyncStatus;
  farmwares: Dictionary<FarmwareManifest | undefined>;
}

export interface Props {
  bot: BotState;
  dispatch: Function;
  images: TaggedImage[];
  currentImage: TaggedImage | undefined;
}

export interface PhotosProps {
  dispatch: Function;
  images: TaggedImage[];
  currentImage: TaggedImage | undefined;
}

export interface CameraCalibrationState {
  settingsMenuOpen: boolean;
}

export interface CameraCalibrationProps {
  images: TaggedImage[];
  currentImage: TaggedImage | undefined;
  onProcessPhoto(id: number): void;
  H_LO: number;
  S_LO: number;
  V_LO: number;
  H_HI: number;
  S_HI: number;
  V_HI: number;
}

export interface FarmwareState {
  currentImage: string | undefined;
}
