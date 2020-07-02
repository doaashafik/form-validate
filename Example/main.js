import Validate from '../API/Schema/index.js'
import { FormValidate } from '../API/index.js';
const Validation = {
    schema: Validate.object.keys({
       email: Validate.string.type('email'),
       cars: Validate.array.contains(Validate.string),
       person: Validate.object.keys({
         firstName: Validate.string,
         lastName: Validate.string,
         age: Validate.number
       }),
      phone: Validate.number.required().minLength(3).maxLength(20)
    }),
    messages: {
      email: {success: 'email is valid', error: 'email not valid'},
      phone: { error: 'phone number not correct', success: 'phone is correct'}
    }
  }
 const formEvents = FormValidate("validate_form_api", Validation);

formEvents.onSubmit(function(e){
  console.log(e, 'onSubmit')
})
formEvents.onValues(function(e){
  console.log(e, 'onValues')
})
formEvents.onMessages(function(e){
  console.log(e, 'onMessages')
})


    

