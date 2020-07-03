import { EventStream } from './eventStream.js';
import { messageValidatedField } from './messages.js';
import { onValue } from './values.js';

export function onSubmitForm() {
  EventStream.validate.errors = getErrors(EventStream.validate.messages);
  const isValidating = EventStream.validate.errors.length === 0;
  return {
    values: onValue(),
    errors: EventStream.validate.errors,
    isSubmitting: isValidating,
    isValidating
  };
}

export function getField({ type, name }) {
  const { schema } = EventStream.form;
  return {
    field: type === 'fieldset' ? schema[name].getter : schema[name],
    name
  };
}

export function getTarget(target) {
  const values = EventStream.values;
  return values.hasOwnProperty(target.name) ? target : target.parentNode;
}

export function handleValidation({ field, name }) {
  EventStream.validate.messages = {
    ...EventStream.validate.messages,
    ...messageValidatedField(field.rule(EventStream.values[name]), name)
  };
  return {
    messages: EventStream.validate.messages
  };
}

export function getErrors(messages) {
  return [
    ...Object.keys(messages)
      .filter(key => messages[key].valid == undefined)
      .map(item => {
        return Object.keys(messages[item])
          .filter(i => !messages[item][i].valid)
          .map(s => ({ [item]: messages[item][s] }))[0];
      }),
    ...Object.keys(messages)
      .filter(key => messages[key].valid == false)
      .map(i => ({ [i]: messages[i] }))
  ];
}
