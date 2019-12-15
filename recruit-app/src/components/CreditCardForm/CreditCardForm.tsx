import React, { useState } from "react";

import "./CreditCardForm.scss";

export interface FormInput {
  creditCardNumber?: string;
  cvc?: string;
  expiryDate?: string;
}

const initialFormInput = {
  creditCardNumber: "",
  cvc: "",
  expiryDate: ""
};

export interface Props {
  onSubmit: (input: FormInput) => void;
}

export function CreditCardForm({ onSubmit }: Props) {
  const [formInput, updateFormInput] = useState<FormInput>(initialFormInput);

  return (
    <div className="credit-card-container">
      <form className="credit-card-form" onSubmit={() => onSubmit(formInput)}>
        {/* Improvements: Would be nice to add a dash after every 4 digits */}
        <input
          className="card-number"
          type="number"
          required
          placeholder="Credit card number"
          value={formInput.creditCardNumber}
          onChange={event =>
            updateFormInput({
              ...formInput,
              creditCardNumber: event.target.value
            })
          }
        />
        <input
          className="cvc"
          type="number"
          required
          placeholder="CVC"
          value={formInput.cvc}
          onChange={event =>
            updateFormInput({
              ...formInput,
              cvc: event.target.value
            })
          }
        />
        <input
          className="expiry"
          type="text"
          required
          placeholder="MM/YY"
          pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
          value={formInput.expiryDate}
          onChange={event =>
            updateFormInput({
              ...formInput,
              expiryDate: event.target.value
            })
          }
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
