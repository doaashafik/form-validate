import { delegation } from '../index.js';
import { ValidateMessage, isValueValid } from '../helpers/index.js';
import { checkByFieldType } from '../Types/array.js';
const ArrayValidator = function() {
  return Object.setPrototypeOf(
    {
      contains: function(field) {
        this.setRule({ field });
        return this;
      },
      rule: function(values) {
        if (Array.isArray(values)) {
          const { field } = this.getRules();
          return checkByFieldType({
            values,
            field
          });
        } else {
          return ValidateMessage(false);
        }
      }
    },
    delegation()
  );
};
export default ArrayValidator;
