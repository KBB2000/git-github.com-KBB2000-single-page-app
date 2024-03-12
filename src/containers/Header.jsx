import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
       <NavLink to="/">
       <h2>Shopping App</h2>
        </NavLink> 
      </div>
    </div>
  );
};

export default Header;