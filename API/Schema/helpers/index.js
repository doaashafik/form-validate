export const ValidateMessage = condition => {
  if (condition) return 'valid';
  return 'invalid';
};
export const isValueValid = v => v === 'valid';
export const isValueTruth = currentValue => currentValue === true;
export const isRequired = value =>
  [[], undefined, null, '', {}, ' '].filter(val => val === value).length === 0;
