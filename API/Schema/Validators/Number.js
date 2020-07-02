import { NUMBER_CHECK } from '../Types/number.js';
import { delegation } from '../index.js';
import { ValidateMessage } from '../helpers/index.js';
const NumberValidator = function() {
  return Object.setPrototypeOf(
    {
      rule: function(value) {
        return ValidateMessage(NUMBER_CHECK(value, this.getRules()));
      },
      minLength: function(minLength) {
        this.setRule({ minLength });
        return this;
      },
      maxLength: function(maxLength) {
        this.setRule({ maxLength });
        return this;
      }
    },
    delegation()
  );
};
export default NumberValidator;
