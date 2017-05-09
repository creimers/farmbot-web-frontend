import { CropLiveSearchResult } from "../interfaces";

const SNAP = 10;
const SCALE_FACTOR = 9.8;

export function scale(radius = 0) {
  return (radius * SCALE_FACTOR / 2);
}

/** Used for snapping.
 * Rounds units to nearest 10 (or whatever SNAP is set to) */
export function round(num: number) {
  return (Math.round(num / SNAP) * SNAP);
}

export interface ScreenToGardenParams {
  pageX: number;
  pageY: number;
  box: ClientRect;
  OFEntry: CropLiveSearchResult;
  zoomLvl: number;
}

export function translateScreenToGarden(params: ScreenToGardenParams) {
  let { pageX, pageY, box, OFEntry, zoomLvl } = params;

  // let theDiff = (OFEntry.crop.height && (OFEntry.crop.height / 4));
  let rawX = (pageX - 320)// + (theDiff || 0);
  let rawY = (pageY - 110)// + (theDiff || 0);

  let count = 0;

  if (zoomLvl < 1) {
    for (zoomLvl; zoomLvl < 1; zoomLvl + 0.1) {
      zoomLvl = Math.max(Math.ceil((zoomLvl += 0.1) * 10) / 10);
      count++;
    }
  }

  console.log("count", count)
  console.log("raw", rawX, rawY)
  console.log("page", pageX, pageY)

  return { x: (rawX + (count * 110)), y: rawY };
}

