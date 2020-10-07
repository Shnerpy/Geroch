import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Geroch</title>
        <link rel='shortcut icon' type='image/x-icon' href="/favicon.ico"/>
      </Helmet>
      <div className="header">
        <a href="/" className="logo"><img src={require('../../../images/logo-text.svg')} style={{height: 50}} /></a>
        <div className="header-right">
          <a className="active" href="/">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#magic">Magic</a>
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