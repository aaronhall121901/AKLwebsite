import { useState } from "react";
import "./Homepage.css";
import aklLogo from "./assets/AKL.png";

function Homepage() {
  return (
    <div className="Homepage">
      <div>
        <a href="https://akl.org/" target="_blank">
          <img src={aklLogo} className="logo" alt="AKL logo" />
        </a>
      </div>
      <h1>Alpha Kappa Lambda</h1>
      <h2>Alpha Zeta</h2>
    </div>
  );
}

export default Homepage;
