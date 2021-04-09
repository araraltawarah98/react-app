import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import cities from "../../data/cities";
import fields from "../../data/fields";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import Option from "../Form/Option";

class SignUp extends Component {
  state = {
    cities,
    email: "",
    fields,
    selected: "Choose Your City",
  };

  getValue = (name) => {
    return this.state.fields.find((element) => element.name === name).value;
  };
  setDisplayValue = (name, value) => {
    const fields = [...this.state.fields];
    const index = fields.findIndex((element) => element.name === name);
    fields[index].isDisplayed = value;
    this.setState({ fields });
  };

  userData = () => {
    const data = {};
    this.state.fields.forEach((element) => {
      data[element.name] = element.value;
    });
    return JSON.stringify(data);
  };

  setValue = (value, name) => {
    const fields = [...this.state.fields];
    const index = fields.findIndex((element) => element.name === name);
    fields[index].value = value;
    this.setState({ fields });
  };

  validateCity = (event) => {
    const cityValue = event.target.value;
    this.setState({ selected: cityValue });
  };

  validateCompany = (name) => {
    const companyValue = this.getValue(name);
    if (companyValue.trim() === "") {
      this.setDisplayValue(name, true);
    } else {
      this.setDisplayValue(name, false);
    }
  };

  validateConfirmPassword = (name) => {
    const confirmPasswordValue = this.getValue(name);
    const passwordValue = this.getValue("Password");
    if (confirmPasswordValue !== passwordValue || passwordValue === "") {
      this.setDisplayValue(name, true);
    } else {
      this.setDisplayValue(name, false);
    }
  };

  validateEmail = (name) => {
    const emailValue = this.getValue(name);
    this.setState({ email: emailValue });
    if (localStorage.getItem(emailValue) || emailValue.trim() === "") {
      this.setDisplayValue(name, true);
    } else {
      this.setDisplayValue(name, false);
    }
  };

  validatePassword = (name) => {
    const letter = /[^a-zA-Z]/;
    const number = /\d/;
    const passwordValue = this.getValue(name);
    const symbol = /[-!$%^&*()_+|#~=`{}\[\]:";'<>?,.\/]/;

    if (
      !symbol.test(passwordValue) ||
      !letter.test(passwordValue) ||
      !number.test(passwordValue)
    ) {
      this.setDisplayValue(name, true);
    } else {
      this.setDisplayValue(name, false);
    }
  };

  handleValidateInput = (event, name) => {
    const inputValue = event.target.value;
    switch (name) {
      case "Company":
        this.setValue(inputValue, name);
        this.validateCompany(name);
        break;
      case "Confirm Password":
        this.setValue(inputValue, name);
        this.validateConfirmPassword(name);
        break;
      case "Email":
        this.setValue(inputValue, name);
        this.validateEmail(name);
        break;
      case "Password":
        this.setValue(inputValue, name);
        this.validatePassword(name);
        break;
    }
  };

  handleSumbit = (event) => {
    event.preventDefault();
    this.validateCompany("Company");
    this.validateConfirmPassword("Confirm Password");
    this.validateEmail("Email");
    this.validatePassword("Password");
    const handleDisplay = this.state.fields.find(
      (elemet) => elemet.isDisplayed
    );

    if (!handleDisplay && this.state.selected !== "Choose Your City") {
      localStorage.setItem(this.state.email, this.userData());
      this.props.history.replace("/");
    }
  };

  render() {
    return (
      <Form>
        <h2 className="text-center">Create account</h2>
        <form className="form" onSubmit={this.handleSumbit}>
          {this.state.fields.map((element) => {
            return (
              <FormField
                error={element.error}
                errorMessage={element.errorMessage}
                handleChange={this.handleValidateInput}
                isDisplayed={element.isDisplayed}
                key={element.id}
                name={element.name}
                placeholder={element.placeholder}
                type={element.type}
                value={element.value}
              />
            );
          })}
          <div className="form-field">
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              onChange={this.validateCity}
              value={this.state.selected}
            >
              <option disabled>Choose Your City</option>
              {this.state.cities.map((element) => {
                return <Option city={element.name} key={element.id} />;
              })}
            </select>
            <div
              className="error-message city-error"
              style={{
                display:
                  this.state.selected === "Choose Your City" ? "block" : "none",
              }}
            >
              <span>Please select a city</span>
            </div>
          </div>
          <div className="form-field">
            <button type="submit">create account</button>
          </div>
        </form>
      </Form>
    );
  }
}

export default withRouter(SignUp);
