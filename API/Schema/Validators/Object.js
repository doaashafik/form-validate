import { delegation } from "../index.js";
import { ObjectCheck } from "../Types/object.js";
import { ValidateMessage } from "../helpers/index.js";

const ObjectValidator = function() {
  return Object.setPrototypeOf(
    {
      keys: function(fields) {
        this.setRule({ fields, type: "object" });
        Object.setPrototypeOf(fields, { getter: this });
        return fields;
      },
      rule: function(value) {
        // check value
        if (typeof value === "object") {
          // get rules
          const { fields } = this.getRules();
          return ObjectCheck(value, fields);
        } else {
          return ValidateMessage(false);
        }
      }
    },
    delegation()
  );
};
export default ObjectValidator;
