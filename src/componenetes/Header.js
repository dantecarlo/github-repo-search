import React from "react";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div>
      <h1 className="text-Left title-style">Github Users</h1>
    </div>
    <div className="form-style">
      <form>
        <input type="search" placeholder="Search Github Users" />
      </form>
    </div>
  </div>
);

export default Header;
