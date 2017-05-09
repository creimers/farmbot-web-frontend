import { OpenFarm } from "./openfarm";
import { DropDownItem } from "../ui/index";
import { CowardlyDictionary } from "../util";
import {
  TaggedFarmEvent,
  TaggedSequence,
  TaggedRegimen,
  TaggedPoint,
  TaggedPlant,
  TaggedCrop
} from "../resources/tagged_resources";
import { TightlyCoupledFarmEventDropDown } from "./farm_events/map_state_to_props_add_edit";

export interface State {
  zoomLvl: number;
  showPlants: boolean;
  showPoints: boolean;
  showSpread: boolean;
}

export interface Props {
  dispatch: Function;
  selectedPlant: TaggedPlant | undefined;
  designer: DesignerState;
  points: TaggedPoint[];
  plants: TaggedPlant[];
  crops: TaggedCrop[];
}

export interface UpdateSequenceOrRegimenProps {
  label: string;
  value: number;
  kind: string;
  farm_event_id: number;
}

export type TimeUnit =
  | "never"
  | "minutely"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

export type ExecutableType = "Sequence" | "Regimen";

export interface FarmEvent {
  id?: number | undefined;
  start_time: string;
  end_time?: string | undefined;
  repeat?: number | undefined;
  time_unit: TimeUnit;
  executable_id: number;
  executable_type: ExecutableType;
  readonly calendar?: string[] | undefined;
};

export interface MovePlantProps {
  deltaX: number;
  deltaY: number;
  plant: TaggedPlant;
}

/** OFCrop bundled with corresponding profile image from OpenFarm API. */
export interface CropLiveSearchResult {
  crop: OpenFarm.OFCrop;
  image: string;
}

export interface Plant {
  created_at?: string | undefined;
  id?: number;
  dirty?: boolean | undefined;
  planted_at?: string | undefined;
  name: string;
  x: number;
  y: number;
  radius: number;
  spread?: number | undefined;
  openfarm_slug: string;
}

export interface Crop {
  id?: undefined;
  svg_icon?: string | undefined;
  spread?: number | undefined;
  slug: string;
}

export interface DesignerState {
  selectedPlant: string | undefined;
  cropSearchQuery: string;
  cropSearchResults: CropLiveSearchResult[];
}

export interface Point {
  id: number;
  x: number;
  y: number;
  z: number;
  radius: number;
  created_at: string;
  meta: { [key: string]: (string | undefined) };
}

export type TaggedExecutable = TaggedSequence | TaggedRegimen;
export type ExecutableQuery = (kind: ExecutableType, id: number) => TaggedExecutable;
export interface AddEditFarmEventProps {
  executableOptions: TightlyCoupledFarmEventDropDown[];
  repeatOptions: DropDownItem[];
  farmEvents: TaggedFarmEvent[];
  regimensById: CowardlyDictionary<TaggedRegimen>;
  sequencesById: CowardlyDictionary<TaggedSequence>;
  farmEventsById: CowardlyDictionary<TaggedFarmEvent>;
  getFarmEvent(): TaggedFarmEvent | undefined;
  formatDate(input: string): string;
  formatTime(input: string): string;
  handleTime(e: React.SyntheticEvent<HTMLInputElement>, currentISO: string): string;
  dispatch: Function;
  findExecutable: ExecutableQuery;
}

/** One CalendarDay has many CalendarOccurrences. For instance, a FarmEvent
 * that executes every 8 hours will create 3 CalendarOccurrences in a single
 * CalendarDay */
export interface CalendarOccurrence {
  sortKey: number;
  timeStr: string;
  executableName: string;
  executableId: number;
  id: number;
}

/** A group of FarmEvents for a particular day on the calendar. */
export interface CalendarDay {
  /** Unix timestamp. Used as a unique key in JSX and for sorting. */
  sortKey: number;
  month: string;
  day: number;
  /** Every event that will execute on that day. */
  items: CalendarOccurrence[];
}

export interface FarmEventProps {
  /** Sorted list of the first (100?) events due on the calendar. */
  calendarRows: CalendarDay[];
  /** Call this function to navigate to different pages. */
  push: (url: string) => void;
}

export interface GardenMapProps {
  showPlants: boolean | undefined;
  showPoints: boolean | undefined;
  showSpread: boolean | undefined;
  dispatch: Function;
  designer: DesignerState;
  points: TaggedPoint[];
  plants: TaggedPlant[];
  selectedPlant: TaggedPlant | undefined;
  crops: TaggedCrop[];
}

export interface GardenMapState {
  isDragging: boolean | undefined;
  pageX: number | undefined;
  pageY: number | undefined;
}

export interface GardenPlantProps {
  showSpread: boolean | undefined;
  plant: Readonly<TaggedPlant>;
  selected: boolean;
  dragging: boolean;
  onClick: (plant: Readonly<TaggedPlant>) => void;
}

export interface GardenPlantState {
  icon: string;
}

export interface GardenPointProps {
  point: TaggedPoint;
}

export type PlantOptions = Partial<Plant>;

export interface SpeciesInfoProps {
  cropSearchResults: CropLiveSearchResult[];
}

export interface PlantData {
  name: string;
  x: number;
  y: number;
  planted_at?: string | undefined;
  uuid: string;
  id?: number;
}

export interface EditPlantInfoProps {
  push(url: string): void;
  dispatch: Function;
  findPlant(stringyID: string | undefined): TaggedPlant | undefined;
}

export interface DNDSpeciesMobileState {
  isDragging: boolean;
}

export interface DraggableEvent {
  currentTarget: HTMLImageElement;
  dataTransfer: { setDragImage: Function; };
}

export interface OFSearchProps {
  dispatch: Function;
  cropSearchResults: CropLiveSearchResult[];
  query: string;
}

export interface OFSearchState {
  results: CropLiveSearchResult[];
}

