import { BooleanValidator } from '../../API/Schema/Validators/index.js';
import { isValueValid } from '../../API/Schema/helpers/index.js';
const values = [false, true, undefined, 'string', 234, null, [], {}];

const Validator = values.filter(value =>
  isValueValid(BooleanValidator().rule(value))
);

test('test boolean', () => {
  expect(Validator.length).toEqual(2);
});
