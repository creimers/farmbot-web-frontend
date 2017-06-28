import { WD_ENV, envGet } from "./remote_env";
import { DropDownItem, NULL_CHOICE } from "../../ui/fb_select";
import { SPECIAL_VALUE_DDI } from "./constants";

export let translateSpecialValue = (input: number): DropDownItem => {
  return SPECIAL_VALUE_DDI[input] || NULL_CHOICE;
};

export let getDropdownSelection = (env: Partial<WD_ENV>) =>
  (key: keyof WD_ENV): DropDownItem => {
    return translateSpecialValue(envGet(key, env));
  };
