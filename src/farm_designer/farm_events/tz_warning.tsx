import * as React from "react";
import { timezoneMismatch } from "../../devices/timezones/guess_timezone";

const WARNING = <span>Note: Times displayed according to local browser time,
  which is currently different from your device timezone setting (on the
  Device page).</span>;

interface TzWarningProps {
  deviceTimezone: string | undefined;
}

export function TzWarning({ deviceTimezone }: TzWarningProps) {
  return <div>
    {timezoneMismatch(deviceTimezone) ? WARNING : ""}
  </div>;
}
