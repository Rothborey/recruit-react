import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";
import { GlobalStateProvider } from "../../GlobalState";

// https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-168
// suppress unwanted warnings
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: string[]) => {
    if (/Warning.*react-modal/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

test("should show menu content when menu button is clicked", () => {
  const { getByTitle, getByText } = render(
    <GlobalStateProvider>
      <Header />
    </GlobalStateProvider>
  );

  const menuButton = getByTitle(/menu-button/i);
  fireEvent.click(menuButton);

  const menuContent = getByText(/This is menu content/i);

  expect(menuContent).toBeInTheDocument();
});

test("should show back arrow when menu button clicked", () => {
  const { getByTitle, getByText } = render(
    <GlobalStateProvider>
      <Header />
    </GlobalStateProvider>
  );

  const menuButton = getByTitle(/menu-button/i);
  fireEvent.click(menuButton);

  const backArrow = getByText(/back-arrow.svg/i);

  expect(backArrow).toBeInTheDocument();
});

test("should show Menu title when menu button clicked", () => {
  const { getByTitle, getByText } = render(
    <GlobalStateProvider>
      <Header />
    </GlobalStateProvider>
  );

  const menuButton = getByTitle(/menu-button/i);
  fireEvent.click(menuButton);

  const menuTitle = getByText(/Menu/);

  expect(menuTitle).toBeInTheDocument();
});

test("should show burger menu icon when menu is closed", () => {
  const { getByTitle, getByText } = render(
    <GlobalStateProvider>
      <Header />
    </GlobalStateProvider>
  );

  const menuButton = getByTitle(/menu-button/i);

  // open menu
  fireEvent.click(menuButton);
  const backArrow = getByText(/back-arrow.svg/i);
  expect(backArrow).toBeInTheDocument();

  // close menu
  fireEvent.click(menuButton);
  const burgerMenu = getByText(/hamburger-menu.svg/i);
  expect(burgerMenu).toBeInTheDocument();
});
