import * as React from "react";
import { ToolBayFormProps } from "../interfaces";
import {
  Widget,
  WidgetBody,
  WidgetHeader,
  Col,
  Row,
  BlurableInput,
  SaveBtn
} from "../../ui";
import { t } from "i18next";
import { TaggedToolSlotPointer } from "../../resources/tagged_resources";
import { edit, destroy, saveAll, init } from "../../api/crud";
import { FBSelect } from "../../ui/new_fb_select";
import { ToolBayHeader } from "./toolbay_header";
import { ToolTips } from "../../constants";

export class ToolBayForm extends React.Component<ToolBayFormProps, {}> {

  emptyToolSlot = (): TaggedToolSlotPointer => {
    return {
      uuid: "ERROR: GENERATED BY REDUCER - SHOULD BE UNSEEN",
      kind: "points",
      body: {
        x: 0,
        y: 0,
        z: 0,
        radius: 50,
        pointer_type: "ToolSlot",
        meta: {},
        tool_id: undefined,
        name: "Tool Slot"
      }
    }
  }

  render() {
    let { toggle, dispatch, toolSlots } = this.props;

    let isSaving = toolSlots && toolSlots
      .filter(x => x.saving).length !== 0;

    let isDirty = toolSlots && toolSlots
      .filter(x => x.dirty).length !== 0;

    let isSaved = !isSaving && !isDirty;
    return <div>
      <Widget>
        <WidgetHeader helpText={ToolTips.TOOLBAY_LIST} title="Tool Slots">
          <button
            className="gray fb-button"
            hidden={!isSaved}
            onClick={() => { toggle(); }}>
            {t("Back")}
          </button>
          <SaveBtn
            isDirty={isDirty}
            isSaving={isSaving}
            isSaved={!isDirty && !isSaving}
            onClick={() => {
              dispatch(saveAll(toolSlots, () => { toggle(); }))
            }}
          />
          <button
            className="green fb-button"
            onClick={() => { dispatch(init(this.emptyToolSlot())); }}>
            <i className="fa fa-plus" />
          </button>
        </WidgetHeader>
        <WidgetBody>
          <ToolBayHeader />
          {this.props.getToolSlots().map(
            (slot: TaggedToolSlotPointer, index: number) => {
              return <Row key={index}>
                <Col xs={2}>
                  <label>{index + 1}</label>
                </Col>
                <Col xs={2}>
                  <BlurableInput
                    value={(slot.body.x || 0).toString()}
                    onCommit={(e) => {
                      dispatch(edit(slot, { x: parseInt(e.currentTarget.value, 10) }));
                    }}
                    type="number"
                  />
                </Col>
                <Col xs={2}>
                  <BlurableInput
                    value={(slot.body.y || 0).toString()}
                    onCommit={(e) => {
                      dispatch(edit(slot, { y: parseInt(e.currentTarget.value, 10) }));
                    }}
                    type="number"
                  />
                </Col>
                <Col xs={2}>
                  <BlurableInput
                    value={(slot.body.z || 0).toString()}
                    onCommit={(e) => {
                      dispatch(edit(slot, { z: parseInt(e.currentTarget.value, 10) }));
                    }}
                    type="number"
                  />
                </Col>
                <Col xs={3}>
                  <FBSelect
                    list={this.props.getToolOptions()}
                    selectedItem={this.props.getChosenToolOption(slot.uuid)}
                    allowEmpty={true}
                    onChange={this.props.changeToolSlot(slot,
                      this.props.dispatch)}
                  />
                </Col>
                <Col xs={1}>
                  <button
                    className="red fb-button"
                    onClick={() => dispatch(destroy(slot.uuid))}>
                    <i className="fa fa-times" />
                  </button>
                </Col>
              </Row>
            })}
        </WidgetBody>
      </Widget>
    </div>
  }
}
