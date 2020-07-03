const Validation = {
  schema: _.Validate.object.keys({
    email: _.Validate.string.type('email'),
    cars: _.Validate.array.contains(_.Validate.string),
    person: _.Validate.object.keys({
      firstName: _.Validate.string,
      lastName: _.Validate.string,
      age: _.Validate.number
    }),
    phone: _.Validate.number
      .required()
      .minLength(3)
      .maxLength(20)
  }),
  messages: {
    email: { success: 'email is valid', error: 'email not valid' },
    phone: { error: 'phone number not correct', success: 'phone is correct' }
  }
};
const formEvents = _.FormValidate('validate_form_api', Validation);

formEvents.onSubmit(function(e) {
  console.log(e, 'onSubmit');
});
formEvents.onValues(function(e) {
  console.log(e, 'onValues');
});
formEvents.onMessages(function(e) {
  console.log(e, 'onMessages');
});
