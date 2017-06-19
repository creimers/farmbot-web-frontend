import { User, AuthState } from "./interfaces";
import { generateReducer } from "../redux/generate_reducer";

export let authReducer = generateReducer<AuthState | undefined>(undefined)
  .add<AuthState>("LOGIN_OK", function (s, a) {
    return a.payload;
  });
