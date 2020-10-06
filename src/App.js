import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Geroch</title>
        <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.ico' />
      </Helmet>
      <header>
        <div class="container">
          <img src="https://i.ibb.co/BB6sMkL/kindpng-3268817.png" alt="icon" />
          <h1>GEROCH</h1>
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