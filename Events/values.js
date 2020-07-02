import { EventStream } from './eventStream.js';

export function onValue() {
  const { form } = EventStream.form;
  [...form.elements]
    .filter(ele => ele.type !== 'submit')
    .filter(ele => ele.parentElement.tagName == 'FORM')
    .forEach(element => {
      if (element.type == 'fieldset') {
        EventStream.values[element.name] = {};
        [...element.elements].forEach(ele => {
          EventStream.values = {
            ...EventStream.values,
            [element.name]: {
              ...EventStream.values[element.name],
              [ele.name]: ele.value
            }
          };
        });
      } else if (element.type == 'select-multiple') {
        EventStream.values = {
          ...EventStream.values,
          [element.name]: [...element.options]
            .filter(option => option.selected == true)
            .map(option => option.value)
        };
      } else {
        EventStream.values = {
          ...EventStream.values,
          [element.name]: element.value
        };
      }
    });
  return EventStream.values;
}
