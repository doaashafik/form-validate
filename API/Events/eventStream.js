import { onValue } from './values.js';
import { onSubmitForm } from './utilities.js';

export const EventStream = (function() {
  return {
    form: {},
    values: {},
    submit: {},
    validate: { submitCount: 0, messages: {}, errors: [] },
    subscirbeValues: {},
    subscirbeMessages: {},
    onMessages: function(callback) {
      const that = this;
      this.subscirbeMessages(function() {
        callback(that.validate.messages);
      });
    },
    onSubmit: function(callback) {
      this.submit(function() {
        callback(onSubmitForm());
      });
    },
    onValues: function(callback) {
      this.subscirbeValues(function() {
        callback(onValue());
      });
    }
  };
})();
