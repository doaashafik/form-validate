import { IMAGE, COLOR, URL, TEXT, EMAIL } from '../Patterns/index.js';
import { isValueTruth, isRequired } from '../helpers/index.js';

export const URL_CHECK = input => {
  return RegExp(URL).test(input);
};

export const CHECK_WITH_PATTERN = function(pattern, value) {
  return RegExp(pattern).test(value);
};
export function checkByType(
  validator = 'string',
  { field, value, pattern, rules }
) {
  return {
    required: isRequired.bind(field, value),
    url: URL_CHECK.bind(field, value),
    email: EMAIL_CHECK.bind(field, value),
    color: COLOR_CHECK.bind(field, value),
    image: IMAGE_CHECK.bind(field, value),
    text: TEXT_CHECK.bind(field, value, rules),
    date: DATE_CHECK.bind(field, value, rules),
    pattern: CHECK_WITH_PATTERN.bind(field, pattern, value),
    string: TEXT_CHECK.bind(field, value, rules)
  }[validator]();
}

export const TEXT_CHECK = (input, options) => {
  let valid = [];
  valid.push(typeof input === 'string');

  if (options.min) {
    valid.push(input.length >= options.min);
  }

  if (options.max) {
    valid.push(input.length <= options.max);
  }
  return valid.every(isValueTruth);
};

export const EMAIL_CHECK = input => {
  return RegExp(EMAIL).test(input);
};

export const DATE_CHECK = (input, { min = undefined, max = undefined }) => {
  const date = new Date(input);
  let valid = [];
  valid.push(!isNaN(Date.parse(input)));

  if (min) {
    const minDate = new Date(min);
    valid.push(date.getTime() >= minDate.getTime());
  }

  if (max) {
    const maxDate = new Date(max);
    valid.push(date.getTime() >= maxDate.getTime());
  }
  return valid.every(isValueTruth);
};

export const COLOR_CHECK = input => {
  return RegExp(COLOR).test(input);
};

export const PASSWORD_CHECK = input => {
  return 'password';
};

export const IMAGE_CHECK = input => {
  return RegExp(IMAGE).test(input);
};
