import * as React from "react";
import { t } from "i18next";

interface WidgetHeaderProps {
  children?: JSX.Element | undefined;
  helpText?: string;
  title: string;
}

export function WidgetHeader(props: WidgetHeaderProps) {
  return <div className="widget-header">
    {props.children}
    <h5>{t(props.title)}</h5>
    {props.helpText &&
      <i className="fa fa-question-circle widget-help-icon">
        <div className="widget-help-text">
          {props.helpText}
        </div>
      </i>
    }
  </div>;
}
