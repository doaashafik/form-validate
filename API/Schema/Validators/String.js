import { checkByType } from "../Types/string.js";
import { delegation } from "../index.js";
import { ValidateMessage } from "../helpers/index.js";

const StringValidator = function() {
  return Object.setPrototypeOf(
    {
      rule: function(value) {
        const { validator, pattern } = this.getRules();
        return ValidateMessage(checkByType(validator, {
          value,
          pattern,
          field: this,
          rules: this.getRules()
        }))
      },
      type: function(validator) {
        this.setRule({ validator });
        return this;
      },
      pattern: function(pattern) {
        this.setRule({ pattern, validator: "pattern" });
        return this;
      },
      min: function(min) {
        this.setRule({ min });
        return this;
      },
      max: function(max) {
        this.setRule({ max });
        return this;
      }
    },
    delegation()
  );
};
export default StringValidator;
