import { NumberValidator } from "../../API/Schema/Validators/index.js";
const mock = [
  { value: undefined, field: NumberValidator().required() },
  { value: '', field: NumberValidator().required() },
  { value: 3434, field: NumberValidator() },
  { value: 45879, field: NumberValidator().maxLength(4) },
  {
    value: 4598,
    field: NumberValidator()
      .minLength(4)
      .maxLength(7)
  }
];
const checker = mock.map(({ field, value }) => field.rule(value));

test("Test Number", () => {
  expect(checker[0]).toBe("invalid");
  expect(checker[1]).toBe("invalid");
  expect(checker[2]).toBe("valid");
  expect(checker[3]).toBe("invalid");
  expect(checker[4]).toBe("valid");
});
