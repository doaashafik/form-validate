import { BOOLEAN } from "../Patterns.js";
export const BOOLEAN_CHECK = input => {
  return RegExp(BOOLEAN).test(input);
};
