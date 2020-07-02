import {
  ArrayValidator,
  BooleanValidator,
  NumberValidator,
  ObjectValidator,
  StringValidator
} from '../../API/Schema/Validators/index.js';

const values = {
  item_1: ['ahmed', 34343, 'ayman'],
  item_2: [123, 456, 5444467],
  item_4: [true, 'invalid', undefined],
  item_3: [
    { name: 'ahmed shafik', age: 23333333387 },
    { name: 'hassan shafsdsdsdsdsdik', age: 33 }
  ]
};
const rules = {
  item_4: ArrayValidator().contains(BooleanValidator().required()),
  item_2: ArrayValidator().contains(
    NumberValidator()
      .required()
      .minLength(1)
      .maxLength(4)
  ),
  item_3: ArrayValidator().contains(
    ObjectValidator().keys({
      age: NumberValidator().maxLength(10),
      name: StringValidator()
        .min(5)
        .max(30)
    })
  ),
  item_1: ArrayValidator().contains(StringValidator().type('text'))
};

test('Test arrayValidator ', () => {
  expect(rules.item_1.rule(values.item_1)).toBe('invalid');
  expect(rules.item_2.rule(values.item_2)).toBe('invalid');
  expect(rules.item_4.rule(values.item_4)).toBe('invalid');
  expect(rules.item_3.rule(values.item_3).age).toBe('invalid');
  expect(rules.item_3.rule(values.item_3).name).toBe('valid');
});
