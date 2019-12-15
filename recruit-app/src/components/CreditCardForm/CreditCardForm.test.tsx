import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CreditCardForm } from "./CreditCardForm";

const ccNumberSelector = /Credit card number/i;
const cvcSelector = /CVC/i;
const dateSelector = /MM\/YY/i;
const submitButtonSelector = /Submit/i;

const validCcNumberInput = {
  target: { value: "123456789" }
};
const validCvcInput = {
  target: { value: "123" }
};
const validDateInput = {
  target: { value: "12/19" }
};
const nullInput = {
  target: { value: null }
};
const invalidNumberInput = {
  target: { value: "not a number" }
};
const invalidDateInput = {
  target: { value: "13/19" }
};

test("triggers onSubmit when all input are valid", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), validCcNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), validCvcInput);
  fireEvent.change(getByPlaceholderText(dateSelector), validDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalled();
});

test("does not triggers onSubmit when credit card number is missing", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), nullInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), validCvcInput);
  fireEvent.change(getByPlaceholderText(dateSelector), validDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});

test("does not triggers onSubmit when cvc is missing", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), validCcNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), nullInput);
  fireEvent.change(getByPlaceholderText(dateSelector), validDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});

test("does not triggers onSubmit when expiry date is missing", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), validCcNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), validCvcInput);
  fireEvent.change(getByPlaceholderText(dateSelector), nullInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});

test("does not triggers onSubmit when credit card number is not a number", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), invalidNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), validCvcInput);
  fireEvent.change(getByPlaceholderText(dateSelector), validDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});

test("does not triggers onSubmit when cvc is not a number", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), validCcNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), invalidNumberInput);
  fireEvent.change(getByPlaceholderText(dateSelector), validDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});

test("does not triggers onSubmit when expiry is not in the correct format", () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CreditCardForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByPlaceholderText(ccNumberSelector), validCcNumberInput);
  fireEvent.change(getByPlaceholderText(cvcSelector), validCvcInput);
  fireEvent.change(getByPlaceholderText(dateSelector), invalidDateInput);
  fireEvent.submit(getByText(submitButtonSelector));

  expect(onSubmit).toBeCalledTimes(0);
});
