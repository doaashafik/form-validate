import { StringValidator } from '../../API/Schema/Validators/index.js';

const rules = [
  {
    value: ' ',
    validate: StringValidator()
      .required()
      .min(1)
      .max(4)
  },
  { value: 'email@gmail.', validate: StringValidator().type('email') },
  { value: 'my string is big', validate: StringValidator().type('text') },
  {
    value: 'https://via.placeholder.com/728x90.png',
    validate: StringValidator().type('image')
  },
  { value: '#fff', validate: StringValidator().type('color') },
  { value: 'www.google.com', validate: StringValidator().type('url') },
  {
    value: 'word hello',
    validate: StringValidator().pattern(/\b(\w*hello)\b/)
  },
  { value: '1-12--2020', validate: StringValidator().type('date') }
];

test('Test string', () => {
  expect(rules[0].validate.rule(rules[0].value)).toBe('invalid');
  expect(rules[1].validate.rule(rules[1].value)).toBe('invalid');
  expect(rules[2].validate.rule(rules[2].value)).toBe('valid');
  expect(rules[3].validate.rule(rules[3].value)).toBe('valid');
  expect(rules[4].validate.rule(rules[4].value)).toBe('valid');
  expect(rules[5].validate.rule(rules[5].value)).toBe('valid');
  expect(rules[6].validate.rule(rules[6].value)).toBe('valid');
  expect(rules[7].validate.rule(rules[7].value)).toBe('invalid');
});
