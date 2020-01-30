import React from "react";
import Label from "./Label";
import Text from "./Text";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      number: "",
      email: "",
      formIsFilled: false,
      emailValidation: false,
      textValidation: false,
      numberValidation: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type;
    const inputValue = event.target.value;
    this.setState({ [value]: inputValue });

    if (value == "email") {
      const emailRegExPatt = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      const emailValidation = emailRegExPatt.test(inputValue);
      this.setState({ emailValidation: emailValidation });
    }

    if (value == "text") {
      const textRegExPatt = /^[a-zA-Z]*$/;
      const textValidation = textRegExPatt.test(inputValue);
      this.setState({ textValidation: textValidation });
    }

    if (value == "number") {
      const numberRegExPatt = /^[0-9]*$/;
      const numberValidation = numberRegExPatt.test(inputValue);
      this.setState({ numberValidation: numberValidation });
    }

    if (this.state.text && this.state.number && this.state.email) {
      this.state.formIsFilled = true;
    } else {
      this.state.formIsFilled = false;
    }
  }

  render() {
    const formIsFilled = this.state.formIsFilled;
    let formIsFilledEl;
    if (formIsFilled) {
      formIsFilledEl = <Text text="Form is ready for submit" />;
    } else {
      formIsFilledEl = <Text text="Fill all of the fields" />;
    }

    const emailValidation = this.state.emailValidation;
    const emailValidationEl = <Text text={"Validation: " + emailValidation} />;
    const textValidation = this.state.textValidation;
    const textValidationEl = <Text text={"Validation: " + textValidation} />;
    const numberValidation = this.state.numberValidation;
    const numberValidationEl = (
      <Text text={"Validation: " + numberValidation} />
    );

    return (
      <form>
        {formIsFilledEl}
        <br />
        <Label label="Text" val={this.state.text} />
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        {textValidationEl}
        <br />
        <Label label="Number" val={this.state.number} />
        <input
          type="number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        {numberValidationEl}
        <br />
        <Label val={this.state.email} label="Email" />
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        {emailValidationEl}
      </form>
    );
  }
}

export default Form;
