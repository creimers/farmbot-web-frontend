import * as React from "react";
import { DropDownItem } from "../ui/index";
import { MenuItem, Menu, Popover, Position } from "@blueprintjs/core/dist";

let RECURSIVE_LIST: DropDownItem = {
  label: "Top Level",
  value: 0,
  children: [
    { label: "0.1", value: 0 },
    { label: "0.2", value: 0 },
    { label: "0.3", value: 0 },
    {
      label: "1.1",
      value: 0,
      children: [
        { label: "2.1", value: 0 },
        { label: "2.2", value: 0 }
      ]
    },
  ]
};

let wow = <Menu>
  <MenuItem text="Submenu">
    <Menu>
      <MenuItem text="Child one" />
      <MenuItem text="Child two" />
      <MenuItem text="Child three" />
    </Menu>
  </MenuItem>
</Menu>;

export function DeleteMe(props: any) {
  return <Popover content={wow} position={Position.RIGHT_BOTTOM}>
    <button className="pt-button pt-icon-share" type="button">
      Hey.
    </button>
  </Popover>;
}
