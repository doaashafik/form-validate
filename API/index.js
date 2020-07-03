//import ObservationClass from "./Observation/index.js";
import { fromEvents } from './Events/index.js';
import { EventStream } from './Events/eventStream.js';
import Validate from '../API/Schema/index.js';
function FormValidate(name, validation) {
  const form = document.querySelector('.' + name);
  EventStream.form = { form, ...validation };
  return fromEvents('DOMContentLoaded');
}

export default {
  FormValidate,
  Validate
};
