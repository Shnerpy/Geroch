<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Magic from './pages/Magic';

const App = () =>(
  <BrowserRouter>
    <Route path='/' component={MainPage}></Route>
    <Route path='/home' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/magic' component={Magic}></Route>
  </BrowserRouter>
)

export default App
=======
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <div className="header">
        <a href="/" className="logo"><img src={require("../../images/logo-text.svg")} style={{height: 50}} /></a>
        <div className="header-right">
          <a className="active" href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/magic">Magic</a>
        </div>
      </div>
      <br/>
      <main>
        {this.props.children}
      </main>
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
>>>>>>> 7ee1a06e8b2fad6dd1caa04a11b40e5ab2533ca6
