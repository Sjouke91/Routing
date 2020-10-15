import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div>
      <NavLink
        to="/"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        // eslint-disable-next-line
        to="/"
      >
        Home page
      </NavLink>
      <NavLink
        to="/about"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        // eslint-disable-next-line
        to="/about"
      >
        About this website
      </NavLink>
      <NavLink
        to="/discover"
        activeClassName="selected"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        // eslint-disable-next-line
        to="/discover"
      >
        Discover movies
      </NavLink>
    </div>
  );
}
