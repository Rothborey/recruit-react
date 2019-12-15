import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "./Header";
import { GlobalStateProvider } from "../../GlobalState";

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

test("should show burger menu icon when menu is closed clicked", () => {
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
