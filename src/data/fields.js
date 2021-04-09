const fields = [
  {
    error: "Email is empty or exist",
    errorMessage: "email-message",
    id: 1,
    isDisplayed: false,
    name: "Email",
    placeholder: "Email Address",
    type: "email",
    value: "",
  },
  {
    error: "Company name can't be empty",
    errorMessage: "company-error",
    id: 2,
    isDisplayed: false,
    name: "Company",
    placeholder: "Company name",
    type: "text",
    value: "",
  },
  {
    error: "Password is invalid",
    errorMessage: "password-message",
    id: 3,
    isDisplayed: false,
    name: "Password",
    placeholder: "Password",
    type: "password",
    value: "",
  },
  {
    error: "Password don't match",
    errorMessage: "confirem-password-message",
    id: 4,
    isDisplayed: false,
    name: "Confirm Password",
    placeholder: "Confirm Password",
    type: "password",
    value: "",
  },
];

export default fields;
