import { NUMBER } from '../Patterns/index.js';
import { isValueTruth, isRequired } from '../helpers/index.js';
export const NUMBER_CHECK = (input, options) => {
  const keys = Object.keys(options);
  if (RegExp(NUMBER).test(input)) {
    return keys
      .map(key => {
        return {
          minLength: input.toString().length >= options['minLength'],
          maxLength: input.toString().length <= options['maxLength'],
          validator: isRequired(input)
        }[key];
      })
      .every(isValueTruth);
  }
};
