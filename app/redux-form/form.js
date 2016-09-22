import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createValidator, required, email, minLength, maxLength} from './validations.js';

const fields = ['firstName', 'lastName', 'email'];
const formValidation = createValidator({
  firstName: [required, minLength(3), maxLength(6)],
  lastName: [required, minLength(3), maxLength(6)],
  email: [required, email]
});

class ContactForm extends Component {
  render() {
    const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
          
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
          
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
           {email.error && email.touched && email.error}

        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields,
  validate: formValidation
})(ContactForm);

export default ContactForm;