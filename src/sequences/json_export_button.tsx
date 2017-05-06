import * as React from "react";

import { JSONExportButtonProps, JSONExportButtonState } from './interfaces';

export class JSONExportButton extends React.Component<JSONExportButtonProps, JSONExportButtonState> {
  
  render() {
    let sequenceJSON = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.props.sequence));
    let filename = `${this.props.sequence.body.name}.json`;
    return (
      <a className="json-export magenta" href={sequenceJSON} download={filename}>export json</a>
    )
  }
}
