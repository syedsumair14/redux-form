import React from "react";
import { Field, reduxForm } from "redux-form";

class App extends React.Component {

  renderError({error, touched}){
      if(error && touched){
          return <div>{error}</div>
      }
  }  

  renderInput = ({ input, label, meta }) => {
      console.log(meta)
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }
  onSubmit(formValues){
      console.log(formValues)
      //PUSH VALES WHEREVER
      alert("DONE!")
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="name" component={this.renderInput} label="Enter Name" />
        <Field name="email" component={this.renderInput} label="Enter Email" />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
    const errors ={};
if(!formValues.name){
    errors.name ="Enter Name before submitting"
}
if(!formValues.email){
    errors.email="Enter Email before Submitting"
}
return errors;
}

export default reduxForm({ form: "addForm", validate })(App);
