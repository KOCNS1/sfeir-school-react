// define Header as a React component
// return the elements as in Header.html
// import the logo url from ../images/Header.logo.svg
import React from "react";
import logo from "../images/Header.logo.svg";

const Header = () => (
  <>
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section">
          <img src={logo} alt="People logo" />
        </section>
      </div>
    </header>
    <div className="mdc-top-app-bar--fixed-adjust"></div>
  </>
);

export default Header;
