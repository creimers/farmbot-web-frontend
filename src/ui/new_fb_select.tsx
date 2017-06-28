import * as React from "react";
import { DropDownItem } from "./fb_select";
import { FilterSearch } from "./filter_search";

interface Props {
  /** Value to show. */
  selectedItem: DropDownItem | undefined;
  /** Notifies component user that something was clicked. */
  onChange(selection: DropDownItem): void;
  /** All possible select options. */
  list: DropDownItem[];
  /** Allow user to select no value. */
  allowEmpty?: boolean;
  /** Text shown before user selection. */
  placeholder?: string | undefined;
}

/** Used as a placeholder for a selection of "none" when allowEmpty is true. */
export const NULL_CHOICE: DropDownItem = Object.freeze({
  label: "None",
  value: ""
});

export class FBSelect extends React.Component<Props, {}> {

  get item() { return this.props.selectedItem || NULL_CHOICE; }

  get items() {
    return this.props.list.map((option: DropDownItem, i) => {
      // let isHeading = option.heading ? "is-heading" : "";
      return { label: option.label, value: option.value };
    })
  }

  render() {
    let placeholder = this.props.placeholder || "Search...";

    return <FilterSearch
      selectedItem={this.item}
      items={this.items}
      onChange={this.props.onChange}
      placeholder={placeholder}
    />;
  }
}
