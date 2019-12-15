import React, { useState } from "react";
import Modal from "react-modal";

import { Menu } from "../Menu/Menu";
import { useGlobalState } from "../../GlobalState";
import { ReactComponent as MenuIcon } from "../../assets/hamburger-menu.svg";
import { ReactComponent as BackIcon } from "../../assets/back-arrow.svg";

import "./Header.scss";

export function Header() {
  const { state } = useGlobalState();
  const [menuIsOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div className="header-container">
        {/* maybe we can turn this into an icon button */}
        <button
          className="menu-button"
          title="menu-button"
          onClick={toggleMenu}
        >
          {menuIsOpen ? (
            <BackIcon className="back-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>
        <div className="header-title">
          {menuIsOpen ? "Menu" : state.pageName}
        </div>
      </div>

      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={menuIsOpen}
        onRequestClose={closeMenu}
        contentLabel="Menu"
      >
        <Menu />
      </Modal>
    </>
  );
}
