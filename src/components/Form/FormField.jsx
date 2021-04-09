import React, { Component } from "react";

class FormField extends Component {
  render() {
    const {
      error,
      errorMessage,
      handleChange,
      isDisplayed,
      name,
      placeholder,
      type,
      value,
    } = this.props;
    return (
      <div className="form-field">
        <label htmlFor={name}>{name}</label>
        <input
          className="input-field"
          name={name}
          onChange={(event) => handleChange(event, name)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        <div
          className={"error-message " + errorMessage}
          style={{ display: isDisplayed ? "block" : "none" }}
        >
          <span>{error}</span>
        </div>
      </div>
    );
  }
}

export default FormField;
