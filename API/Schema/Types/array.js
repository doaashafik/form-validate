import { isValueValid, ValidateMessage } from '../helpers/index.js';

export const checkByFieldType = ({ values, field }) => {
  let result = [];
  let isObject = false;
  values.forEach(value => {
    if (field.getter) {
      isObject = true;
      result.push(field.getter.rule(value));
    } else {
      result.push(field.rule(value));
    }
  });
  return isObject ? result[0] : ValidateMessage(result.every(isValueValid));
};
