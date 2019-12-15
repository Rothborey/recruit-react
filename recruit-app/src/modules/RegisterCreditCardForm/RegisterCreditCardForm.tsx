import React, { useEffect } from "react";

import { useGlobalState } from "../../GlobalState";
import {
  CreditCardForm,
  FormInput
} from "../../components/CreditCardForm/CreditCardForm";

import "./RegisterCreditCardForm.scss";

export function RegisterCreditCardForm() {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({
      payload: { pageName: "Register credit card" }
    });
  }, []);

  return (
    <div className="register-credit-card-container">
      <div className="welcome-message">Welcome {state.user.firstName}</div>
      <CreditCardForm onSubmit={input => handleCreditCardSubmit(input)} />
    </div>
  );
}

function handleCreditCardSubmit(input: FormInput) {
  // TODO: this function should call a PCI compliant service to save the credit card details
  console.log("Credit card form has been submitted", input);
}
