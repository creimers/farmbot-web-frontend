import { WD_ENV as ENV } from "./remote_env";

export interface SettingsMenuProps {
  values: Partial<ENV>;
  onChange(key: keyof ENV, value: number): void;
}
