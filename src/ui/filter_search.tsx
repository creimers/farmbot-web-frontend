import * as React from "react";

import { Button, Classes, MenuItem, Switch } from "@blueprintjs/core";
import { ISelectItemRendererProps, Select } from "@blueprintjs/labs";

const Selekt = Select.ofType<any>();

export interface ISelectExampleState {
  film?: any;
  filterable?: boolean;
  minimal?: boolean;
  resetOnSelect?: boolean;
}

export class FilterSearch extends React.Component<any, any> {

  public state: ISelectExampleState = {
    film: undefined,
    filterable: true,
    minimal: false,
    resetOnSelect: false,
  };

  private handleFilterableChange = this.handleSwitchChange("filterable");
  private handleMinimalChange = this.handleSwitchChange("minimal");
  private handleResetChange = this.handleSwitchChange("resetOnSelect");

  render() {
    const { film, minimal, ...flags } = this.state;
    return (
      <Selekt
        {...flags}
        items={this.props.items}
        itemPredicate={this.filterFilm}
        itemRenderer={this.renderItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.handleValueChange}
        popoverProps={{ popoverClassName: minimal ? Classes.MINIMAL : "" }}
      >
        <Button
          rightIconName="double-caret-vertical"
          text={film ? film.label : "(No selection)"}
        />
      </Selekt>
    );
  }

  protected renderOptions() {
    return [
      [
        <Switch
          key="filterable"
          label="Filterable"
          checked={this.state.filterable}
          onChange={this.handleFilterableChange}
        />,
        <Switch
          key="reset"
          label="Reset on select"
          checked={this.state.resetOnSelect}
          onChange={this.handleResetChange}
        />,
        <Switch
          key="minimal"
          label="Minimal popover style"
          checked={this.state.minimal}
          onChange={this.handleMinimalChange}
        />,
      ],
    ];
  }

  private renderItem({ handleClick, isActive, item: film }: ISelectItemRendererProps<any>) {
    return (
      <MenuItem
        className={"aclasslol"}
        key={film.value}
        onClick={handleClick}
        text={`${film.label}`}
      />
    );
  }

  private filterFilm(query: string, film: any, index: number) {
    return "`${index + 1}. ${film.label.toLowerCase()}`"
      .indexOf(query.toLowerCase()) >= 0;
  }

  private handleValueChange = (film: any) => this.setState({ film });

  private handleSwitchChange(prop: keyof ISelectExampleState) {
    return (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({ [prop]: event.currentTarget.checked });
    };
  }
}
