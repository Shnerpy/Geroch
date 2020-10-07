import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

export default function Home() {
  return (
    <div>
      <div className="header">
        <a href="/" className="logo"><img src={require("../../images/logo-text.svg")} style={{height: 50}} /></a>
        <div className="header-right">
          <NavLink activeClassName="active" to="/Home">Home</NavLink>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <NavLink activeClassName="active" to="/magic">Magic</NavLink>
        </div>
      </div>
      <br/>
      <section>
        <div className="container">
          <h2>Heading Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante metus, bibendum sed euismod efficitur,
            laoreet at massa. Mauris sit amet iaculis diam, eu accumsan eros. Vivamus commodo ac est a eleifend. Nunc
            consequat tincidunt orci, at tincidunt tellus bibendum eu. Sed ac eros enim. Praesent efficitur ipsum
            tortor, sit amet elementum lacus sollicitudin et. Sed ornare euismod ligula et venenatis.
          </p>
        </div>
      </section>
      <footer>
        <div className="footer">
          Copyright &#169; {new Date().getFullYear()}. All Right Reserved. Kitsun Ly.
        </div>
      </footer>
    </div>
  );
}