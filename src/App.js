import React from "react";
import { Helmet } from "react-helmet";
import "./styles/style.css";
import "./styles/userCodes.css";
import logo_text from "./images/logo-text.svg";
import logo from "./images/logo.svg";

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Geroch</title>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Helmet>
      <header>
        <div class="container">
          <img src={logo_text} alt='k' style={{width: 200}}/>
          <ul className="navigation">
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
      </header>
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
          <p>@copy 2020. All Right Reserved. Kitsun Ly.</p>
        </div>
      </footer>
    </div>
  );
}