import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Magic from './pages/Magic';

const App = () =>(
  <BrowserRouter>
    <Route path='/' exact component={MainPage}></Route>
    <Route path='/home' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/magic' component={Magic}></Route>
  </BrowserRouter>
)

export default App