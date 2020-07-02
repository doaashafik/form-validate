import { EventStream } from './eventStream.js';

export const typeOfMessage = (valid, message) => ({ valid, message });

export function byCondition(condition, { success, error }) {
  return {
    valid: typeOfMessage.bind(typeOfMessage, true, success),
    invalid: typeOfMessage.bind(typeOfMessage, false, error)
  }[condition];
}

export function getMessages(message) {
  if (message) return message;
  return { success: 'Field is valid', error: 'Field is not valid' };
}

export function messageValidatedField(result, name) {
  let {
    form: { messages }
  } = EventStream;
  if (typeof result == 'string') {
    return { [name]: byCondition(result, getMessages(messages[name]))() };
  } else {
    let message = {};
    for (let key in result) {
      message[name] = {
        ...message[name],
        [key]: byCondition(result[key], getMessages(messages[name]))()
      };
    }
    return message;
  }
}
