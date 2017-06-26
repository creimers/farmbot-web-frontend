import * as React from "react";
import { FarmbotColorPicker } from "../farmbot_picker";
import { BlurableInput } from "../../ui/index";
import { ImageFlipper } from "../image_flipper";
import { HSV } from "../interfaces";
import { WeedDetectorSlider } from "./slider";
import { TaggedImage } from "../../resources/tagged_resources";
import { t } from "i18next";
import {
  DEFAULTS,
  WeedDetectorENVKey as EnvKey,
  envSave
} from "./remote_env";

const RANGES = {
  H: { LOWEST: 0, HIGHEST: 179 },
  S: { LOWEST: 0, HIGHEST: 255 },
  V: { LOWEST: 0, HIGHEST: 255 },
  BLUR: { LOWEST: 0, HIGHEST: 100 },
  MORPH: { LOWEST: 0, HIGHEST: 100 },
  ITERATION: { LOWEST: 0, HIGHEST: 100 },
};

interface Props {
  onFlip(uuid: string | undefined): void;
  onProcessPhoto(image_id: number): void;
  currentImage: TaggedImage | undefined;
  images: TaggedImage[];
  H_LO: number;
  H_HI: number;
  S_LO: number;
  S_HI: number;
  V_LO: number;
  V_HI: number;
  onSliderChange(key: EnvKey, value: number): void;
}

type BMI = "blur" | "morph" | "iteration";

let onCommit = (BMI: BMI) => (e: React.SyntheticEvent<HTMLInputElement>) => {
  console.log("WOW")
  envSave(BMI, parseInt(e.currentTarget.value, 10) || 0);
}

export function WeedDetectorBody({
  images,
  H_LO,
  H_HI,
  S_LO,
  S_HI,
  V_LO,
  V_HI,
  onSliderChange,
  onProcessPhoto,
  currentImage,
  onFlip
}: Props) {
  /** Mapping of HSV values to FBOS Env variables. */
  let CHANGE_MAP: Record<HSV, [EnvKey, EnvKey]> = {
    H: ["H_LO", "H_HI"],
    S: ["S_LO", "S_HI"],
    V: ["V_LO", "V_HI"]
  }

  let onChange = (key: HSV) => (values: [number, number]) => {
    let keys = CHANGE_MAP[key];
    [0, 1].map(i => onSliderChange(keys[i], values[i]));
  }

  let processPhoto = () => {
    let img = currentImage || images[0];
    if (img && img.body.id) {
      onProcessPhoto(img.body.id);
    }
  }

  const CHRIS_HALP = { "marginTop": 25 }
  return <div className="widget-content">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <h4>
          <i>{t("Color Range")}</i>
        </h4>
        <label htmlFor="hue">{t("HUE")}</label>
        <WeedDetectorSlider
          onChange={onChange("H")}
          onRelease={_.noop}
          lowest={RANGES.H.LOWEST}
          highest={RANGES.H.HIGHEST}
          lowValue={H_LO}
          highValue={H_HI} />
        <label htmlFor="saturation">{t("SATURATION")}</label>
        <WeedDetectorSlider
          onChange={onChange("S")}
          onRelease={_.noop}
          lowest={RANGES.S.LOWEST}
          highest={RANGES.S.HIGHEST}
          lowValue={S_LO}
          highValue={S_HI} />
        <label htmlFor="value">{t("VALUE")}</label>
        <WeedDetectorSlider
          onChange={onChange("V")}
          onRelease={_.noop}
          lowest={RANGES.V.LOWEST}
          highest={RANGES.V.HIGHEST}
          lowValue={V_LO}
          highValue={V_HI} />
      </div>
      <div className="col-md-6 col-sm-12">
        <FarmbotColorPicker
          h={[H_LO, H_HI]}
          s={[S_LO, S_HI]}
          v={[V_LO, V_HI]} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <h4>
          <i>{t("Processing Parameters")}</i>
        </h4>
      </div>

      <div className="col-md-4 col-sm-4">
        <label>{t("BLUR")}</label>
        <BlurableInput type="number"
          min={RANGES.BLUR.LOWEST}
          max={RANGES.BLUR.HIGHEST}
          onCommit={onCommit("blur")}
          value={"" + DEFAULTS.blur} />
      </div>

      <div className="col-md-4 col-sm-4">
        <label>{t("MORPH")}</label>
        <BlurableInput type="number"
          min={RANGES.MORPH.LOWEST}
          max={RANGES.MORPH.HIGHEST}
          onCommit={onCommit("morph")}
          value={"" + DEFAULTS.morph} />
      </div>
      <div className="col-md-4 col-sm-4">
        <label>{t("ITERATION")}</label>
        <BlurableInput type="number"
          min={RANGES.ITERATION.LOWEST}
          max={RANGES.ITERATION.HIGHEST}
          onCommit={onCommit("iteration")}
          value={"" + DEFAULTS.iteration} />
      </div>
    </div>
    <button className="green"
      style={CHRIS_HALP}
      title="Scan this image for Weeds"
      onClick={processPhoto}
      hidden={!images.length}>
      {t("Scan for Weeds")}
    </button>
    <ImageFlipper
      onFlip={onFlip}
      images={images}
      currentImage={currentImage} />
  </div>;
}
