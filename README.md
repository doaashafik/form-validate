# VE-Form-Validate

form-validate is a library that allows you to validate inputs and return streams of data that detect the validation.

### INSTALATION

`npm i ve-form-validate`

### API

#### Schema

With **Validate** Object user can handle all stuff validation
Validator | Description
------------ | -------------
|BooleanValidator | **Validate.boolean**
|NumberValidator | **Validate.number**
| |validate number with **minLength** & **maxLength**
| | _Example: Validate.number.minLength(3)_
|ObjectValidator | **Validate.object**
| |object validator has **keys** function
| |that wrap all validation
|StringValidator | **Validate.string**
| |validate string with **min** & **max**
| | validate any type of string with **type** method
| | **color** - **email** - **date** - **text** - **url** - **image**
| | for special pattern you can use **pattern** method
| | _Example: Validate.string.type('email')_
| | _Example: Validate.string.pattern(`/^([^.]+)/`)_
|ArrayValidator | validate input array with **contains** method
| | _Example: Validate.array.contains(Validate.number.minLength(5))_

#### Special Methods

`required()` is a shared method for all validators

#### Events

after you handle schema, you can access these events to handle more stuff
when user input or on submit event
Event | Description
------------ | -------------
onValues | got a stream of form values
onMessages | this event will emit **success - error** messages depend on the validation
onSubmit | will send object that contains **isValidating - isSubmiting - errors if found - Form Values**

#### Access Events

`const formEvents = FormValidate("validate_form_api", Validation);`

```javascript
formEvents.onSubmit(function(submit) {
  console.log(submit, 'onSubmit');
});
formEvents.onValues(function(values) {
  console.log(values, 'onValues');
});
formEvents.onMessages(function(messages) {
  console.log(messages, 'onMessages');
});
```

#### USAGE

**you will send validation object to `FormValidate` Method with form className**

```javascript
import { FormValidate, Validate } from 've-form-validate';
const Validation = {
  schema: Validate.object.keys({
    email: Validate.string.type('email'),
    phone: Validate.number.required()
  }),
  messages: {
    email: {
      success: 'email is valid',
      error: 'email not valid'
    },
    phone: {
      error: 'phone number not correct',
      success: 'phone is correct'
    }
  }
};
const formEvents = FormValidate('validate_form_api', Validation);
```

#### EXAMPLES

**Simple Filed**

```javascript

<input name="phone" placeholder="phone" />
<input name="email" placeholder="email" />

 Validate.object.keys({
     email: Validate.string.type("email"),
     phone: Validate.number.required()
});
```

**Object Field**

```javascript
<fieldset name="person">
  <input type="text" name="firstName" value="ayman" />
  <input type="text" name="lastName" value="shafik" />
  <input type="text" name="age" />
</fieldset>;

Validate.object.keys({
  person: Validate.object.keys({
    firstName: Validate.string,
    lastName: Validate.string,
    age: Validate.number
  })
});
```

**Validate array of boolean/number/string fields**

```javascript
<select name="cars" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>;

Validate.object.keys({
  cars: Validate.array.contains(Validate.string)
});
```

### TODO

- _Localization_
- _Validate arr of objects_

### LICENCE

MIT
