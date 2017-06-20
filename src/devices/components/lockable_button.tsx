import * as React from "react";
import { JSXChildren } from "../../util";

interface Props {
  onClick: Function;
  disabled: boolean;
  children?: JSXChildren;
}

export function LockableButton({ onClick, disabled, children }: Props) {
  let className = disabled ? "gray" : "yellow";
  return <button className={className}
    disabled={disabled}
    onClick={() => disabled ? "" : onClick()}>
    {children}
  </button>;
};
