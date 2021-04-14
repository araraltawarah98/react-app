import React from "react";

function FormField({
  error,
  errorMessage,
  handleChange,
  isDisplayed,
  name,
  placeholder,
  type,
  value,
}) {
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

export default FormField;
