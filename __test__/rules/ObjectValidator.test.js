import {
  ObjectValidator,
  StringValidator,
  NumberValidator
} from '../../API/Schema/Validators/index.js';

const rules = {
  value: {
    item_1: 4445,
    item_2: 'hellodddddddddddddddddddddddddddddddd world'
  },
  validate: ObjectValidator().keys({
    item_1: NumberValidator()
      .required()
      .minLength(2)
      .maxLength(5),
    item_2: StringValidator()
      .min(5)
      .max(20)
  })
};

test('Test objectValidator ', () => {
  const { validate, value } = rules;
  expect(validate.getter.rule(value).item_1).toBe('valid');
  expect(validate.getter.rule(value).item_2).toBe('invalid');
});
