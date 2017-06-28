import * as React from "react";

import { Button, Classes, MenuItem } from "@blueprintjs/core";
import { ISelectItemRendererProps, Select } from "@blueprintjs/labs";
import { DropDownItem } from "./fb_select";

const SelectComponent = Select.ofType<DropDownItem>();

interface Props {
  items: DropDownItem[];
  selectedItem: DropDownItem;
  onChange: (item: DropDownItem) => void;
  placeholder?: string;
}

interface State {
  item?: DropDownItem;
  filterable?: boolean;
  minimal?: boolean;
  resetOnSelect?: boolean;
}

export class FilterSearch extends React.Component<Props, State> {

  componentWillReceiveProps() {
    this.setState({ item: this.props.selectedItem });
  }

  public state: State = {
    item: undefined,
    filterable: true,
    minimal: false,
    resetOnSelect: false
  };

  render() {
    const { item, minimal, ...flags } = this.state;
    return (
      <SelectComponent
        {...flags}
        items={this.props.items}
        itemPredicate={this.filter}
        itemRenderer={this.renderItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.handleValueChange}
        popoverProps={{ popoverClassName: minimal ? Classes.MINIMAL : "" }}
      >
        <Button
          rightIconName="double-caret-vertical"
          text={item ? item.label : "(No selection)"}
        />
      </SelectComponent>
    );
  }

  private renderItem({ handleClick, isActive, item }: ISelectItemRendererProps<DropDownItem>) {
    return (
      <MenuItem
        className={"filter-search-item"}
        key={item.value}
        onClick={handleClick}
        text={`${item.label}`}
      />
    );
  }

  private filter(query: string, item: DropDownItem, index: number) {
    return `${index + 1}. ${item.label.toLowerCase()}`
      .indexOf(query.toLowerCase()) >= 0;
  }

  private handleValueChange = (item: DropDownItem) => {
    this.props.onChange(item);
    this.setState({ item })
  };

}
