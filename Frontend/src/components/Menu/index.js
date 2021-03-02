import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Menu(props) {
  const [on, setOn] = useState("menu-section");

  function handleOpenMenu() {
    if (on === "menu-section") {
      setOn("menu-section on");
    } else {
      setOn("menu-section");
    }
  }
  var menu;
  if (props.admin === true) {
    menu = (
      <ul>
        <li>
          <a href="##">
            <Link to="/">Logout</Link>
          </a>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul>
        <li>
          <a href="##">
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <Link to="/parties">
            <a href="##">Parties</a>
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <header>
      <div class="containerMenu">
        <div class="logo">
          <Link to="/login" id="logo">
            <FontAwesomeIcon className="iconLogo" icon={faMoon} size="5x" />
            <span>Moon Parties</span>
          </Link>
        </div>
        <div class={on}>
          <div class="menu-toggle" onClick={handleOpenMenu}>
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>
          <nav>{menu}</nav>
        </div>
      </div>
    </header>
  );
}
