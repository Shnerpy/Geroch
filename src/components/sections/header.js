import React from 'react'
import { NavLink } from "react-router-dom";
import "../style.css";

export default function Header() {
  return (<>
  <div className="header">
    <img src={require("../../images/logo-text.svg")} className="logo"  style={{height: 50}}/>
    <div className="header-right">
      <NavLink activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/magic">Magic</NavLink>
    </div>
  </div>
  <br/>
</>)}