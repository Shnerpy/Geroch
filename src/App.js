import React from "react";
import { Helmet } from "react-helmet";
import "./styles/style.css";
import "./styles/sstyles.css";
import logo_text from "./images/logo-text.svg";

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Geroch</title>
        <link rel='shortcut icon' type='image/x-icon' href="/favicon.ico"/>
      </Helmet>
      <div class="header">
        <a href="/" class="logo"><img src={logo_text} style={{height: 50}} /></a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <section>
        <div class="container">
          <h2>Heading Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante metus, bibendum sed euismod efficitur,
            laoreet at massa. Mauris sit amet iaculis diam, eu accumsan eros. Vivamus commodo ac est a eleifend. Nunc
            consequat tincidunt orci, at tincidunt tellus bibendum eu. Sed ac eros enim. Praesent efficitur ipsum
            tortor, sit amet elementum lacus sollicitudin et. Sed ornare euismod ligula et venenatis.
          </p>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="footer-bottom">
            copyright &#169; <script>document.write(new Date().getFullYear());</script>. All Right Reserved. Kitsun Ly.
          </div>
        </div>
      </footer>
    </div>
  );
}