import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cities_ from "../../data/cities";
import fields_ from "../../data/fields";
import Form from "../Form/Form";
import FormField from "../Form/FormField";
import Option from "../Form/Option";

function SignUp() {
  const [cities] = useState(cities_);
  const [email, setEmail] = useState("");
  const [fields, setFields] = useState(fields_);
  const [selected, setSelected] = useState("Choose Your City");
  const history = useHistory();

  const getValue = (name) => {
    return fields.find((element) => element.name === name).value;
  };

  const handleValidateInput = (event, name) => {
    const inputValue = event.target.value;
    switch (name) {
      case "Company":
        setValue(inputValue, name);
        validateCompany(name);
        break;
      case "Confirm Password":
        setValue(inputValue, name);
        validateConfirmPassword(name);
        break;
      case "Email":
        setValue(inputValue, name);
        validateEmail(name);
        break;
      case "Password":
        setValue(inputValue, name);
        validatePassword(name);
        break;
    }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    validateCompany("Company");
    validateConfirmPassword("Confirm Password");
    validateEmail("Email");
    validatePassword("Password");
    const handleDisplay = fields.find((elemet) => elemet.isDisplayed);

    if (!handleDisplay && selected !== "Choose Your City") {
      localStorage.setItem(email, userData());
      history.push("/home");
    }
  };

  const setDisplayValue = (name, value) => {
    const fields_ = [...fields];
    const index = fields_.findIndex((element) => element.name === name);
    fields_[index].isDisplayed = value;
    setFields(fields_);
  };

  const setValue = (value, name) => {
    const fields_ = [...fields];
    const index = fields_.findIndex((element) => element.name === name);
    fields_[index].value = value;
    setFields(fields_);
  };

  const userData = () => {
    const data = {};
    fields.forEach((element) => {
      data[element.name] = element.value;
    });
    return JSON.stringify(data);
  };

  const validateCity = (event) => {
    const cityValue = event.target.value;
    setSelected(cityValue);
  };

  const validateCompany = (name) => {
    const companyValue = getValue(name);
    if (companyValue.trim() === "") {
      setDisplayValue(name, true);
    } else {
      setDisplayValue(name, false);
    }
  };

  const validateConfirmPassword = (name) => {
    const confirmPasswordValue = getValue(name);
    const passwordValue = getValue("Password");
    if (confirmPasswordValue !== passwordValue || passwordValue === "") {
      setDisplayValue(name, true);
    } else {
      setDisplayValue(name, false);
    }
  };

  const validateEmail = (name) => {
    const emailValue = getValue(name);
    setEmail(emailValue);
    if (localStorage.getItem(emailValue) || emailValue.trim() === "") {
      setDisplayValue(name, true);
    } else {
      setDisplayValue(name, false);
    }
  };

  const validatePassword = (name) => {
    const letter = /[^a-zA-Z]/;
    const number = /\d/;
    const passwordValue = getValue(name);
    const symbol = /[-!$%^&*()_+|#~=`{}\[\]:";'<>?,.\/]/;

    if (
      !symbol.test(passwordValue) ||
      !letter.test(passwordValue) ||
      !number.test(passwordValue)
    ) {
      setDisplayValue(name, true);
    } else {
      setDisplayValue(name, false);
    }
  };

  return (
    <Form>
      <h2 className="text-center">Create account</h2>
      <form className="form" onSubmit={handleSumbit}>
        {fields.map((element) => {
          return (
            <FormField
              error={element.error}
              errorMessage={element.errorMessage}
              handleChange={handleValidateInput}
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
            onChange={validateCity}
            value={selected}
          >
            <option disabled>Choose Your City</option>
            {cities.map((element) => {
              return <Option city={element.name} key={element.id} />;
            })}
          </select>
          <div
            className="error-message city-error"
            style={{
              display: selected === "Choose Your City" ? "block" : "none",
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

export default SignUp;
