import * as React from "react";

import { Button, Classes, MenuItem } from "@blueprintjs/core";
import { ISelectItemRendererProps, Select } from "@blueprintjs/labs";

const SelectComponent = Select.ofType<any>();

interface Item {
  label: string;
  value: string | number;
}

interface Props {
  items: Item[];
}

interface State {
  item?: Item;
  filterable?: boolean;
  minimal?: boolean;
  resetOnSelect?: boolean;
}

export class FilterSearch extends React.Component<Props, State> {

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

  private renderItem({ handleClick, isActive, item: item }: ISelectItemRendererProps<Item>) {
    return (
      <MenuItem
        className={"filter-search"}
        key={item.value}
        onClick={handleClick}
        text={`${item.label}`}
      />
    );
  }

  private filter(query: string, item: any, index: number) {
    return `${index + 1}. ${item.label.toLowerCase()}`
      .indexOf(query.toLowerCase()) >= 0;
  }

  private handleValueChange = (item: any) => this.setState({ item });

}
