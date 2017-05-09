import { DropDownItem } from "../ui/fb_select";
import {
  TaggedTool,
  TaggedToolSlot,
} from "../resources/tagged_resources";

export interface ToolsState {
  editingTools: boolean;
  editingBays: boolean;
}

export interface Props {
  toolSlots: TaggedToolSlot[];
  tools: TaggedTool[];
  getToolOptions(): DropDownItem[];
  getChosenToolOption(toolSlotUuid: string): DropDownItem;
  getToolByToolSlotUUID(uuid: string): TaggedTool | undefined;
  getToolSlots(): TaggedToolSlot[];
  dispatch: Function;
  isActive: (tool: TaggedTool) => boolean;
  changeToolSlot(t: TaggedToolSlot, dispatch: Function): (d: DropDownItem) => void;
}

export interface ToolSlot {
  id?: number | undefined;
  tool_id?: number | undefined;
  created_at?: string;
  x: number;
  y: number;
  z: number;
}

export interface Tool {
  id?: number | undefined;
  name: string;
}

export interface ToolBayListProps {
  dispatch: Function;
  toggle(): void;
  getToolByToolSlotUUID(uuid: string): TaggedTool | undefined;
  getToolSlots(): TaggedToolSlot[];
}

export interface ToolBayFormProps {
  dispatch: Function;
  toolSlots: TaggedToolSlot[];
  toggle(): void;
  getToolOptions(): DropDownItem[];
  getChosenToolOption(uuid: string): DropDownItem;
  getToolSlots(): TaggedToolSlot[];
  changeToolSlot(t: TaggedToolSlot, dispatch: Function): (d: DropDownItem) => void;
}

export interface ToolListProps {
  tools: TaggedTool[];
  dispatch: Function;
  toggle(): void;
  isActive(tool: TaggedTool): boolean;
}

export interface ToolFormProps {
  dispatch: Function;
  tools: TaggedTool[];
  toggle(): void;
}
