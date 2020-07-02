import { EventStream } from './eventStream.js';
import { schemaHandler } from '../Schema/index.js';
import { onValue } from './values.js';
import { handleValidation, getField, getTarget } from './utilities.js';

export const fromEvents = function(event) {
  const { form } = EventStream.form;
  return Binder(function(handler) {
    form.addEventListener(event, handler);
  }, event);
};

export const Binder = function(binder, event) {
  if (event === 'input') {
    EventStream.subscirbeMessages = binder;
    EventStream.subscirbeValues = binder;

    binder(function(e) {
      onValue();
      EventStream.validate = handleValidation(getField(getTarget(e.target)));
    });
  }
  if (event === 'submit') {
    EventStream.submit = binder;

    binder(function(e) {
      onValue();
      const { schema } = EventStream.form;
      e.preventDefault();
      Object.keys(schema).forEach(name => {
        handleValidation(getField(document.getElementsByName(name)[0]));
      });
    });
  }
  if (event === 'DOMContentLoaded') {
    onValue();
    schemaHandler();
  }
  return EventStream;
};
