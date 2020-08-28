import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Produto from '../Pages/SingleProduct';
//import Header from '../Components/Menu';


export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/produtos/:produto" component={Produto}/>
      </Switch>
    </BrowserRouter>
  )
}
