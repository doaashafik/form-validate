import {
  NumberValidator,
  ArrayValidator,
  ObjectValidator,
  StringValidator,
  BooleanValidator
} from './Validators/index.js';
import { fromEvents } from '../Events/index.js';
import { EventStream } from '../Events/eventStream.js';
export const delegation = function() {
  let rules = {};
  return {
    getRules: function() {
      return rules;
    },
    setRule(rule) {
      rules = { ...rules, ...rule };
    },
    required: function() {
      this.setRule({ validator: 'required' });
      return this;
    }
  };
};

const SchemaValidators = {
  get number() {
    return NumberValidator();
  },
  get boolean() {
    return BooleanValidator();
  },
  get string() {
    return StringValidator();
  },
  get object() {
    return ObjectValidator();
  },
  get array() {
    return ArrayValidator();
  }
};

export function schemaHandler() {
  fromEvents('input');
  fromEvents('submit');
  return EventStream;
}

export const Validate = Object.create(SchemaValidators);
