import { EventStream } from './eventStream.js';
import { messageValidatedField } from './messages.js';
import { onValue } from './values.js';
import { isValueValid, isValueTruth } from '../Schema/helpers/index.js';

export function onSubmitForm() {
  const { errors } = EventStream.validate;
  const isValidating = errors.length === 0;
  return {
    values: onValue(),
    isValidating,
    isSubmitting: isValidating,
    errors
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
  EventStream.validate.errors = getErrors(EventStream.validate.messages);
  return {
    errors: EventStream.validate.errors,
    messages: EventStream.validate.messages
  };
}

export function getErrors(messages) {
  return Object.keys(messages)
    .filter(
      key =>
        messages[key].valid == false ||
        (messages[key].valid == undefined &&
          !Object.keys(messages[key])
            .map(child => messages[key][child].valid)
            .every(isValueTruth))
    )
    .map(key => ({ [key]: messages[key] }));
}
