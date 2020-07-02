import { delegation } from '../index.js'
import { ValidateMessage } from '../helpers/index.js';
 const BooleanValidator = function() {
    return Object.setPrototypeOf(
      {
        rule: function(value) {
          return ValidateMessage(typeof value === 'boolean')
        }
      },
      delegation()
    );
  };
export default BooleanValidator