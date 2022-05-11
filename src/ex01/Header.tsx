import React from "react";
// define Header as a React component
// return the elements as in Header.html
// import the logo url from ../images/Header.logo.svg
import logoUrl from "../images/Header.logo.svg";

export const Header: React.FC = () => (
  <>
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section">
          <img src={logoUrl} alt="People logo" />
        </section>
      </div>
    </header>
    <div className="mdc-top-app-bar--fixed-adjust"></div>
  </>
);
