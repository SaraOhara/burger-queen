import React from 'react';
import { Register } from './pages/authenticationPages/Register';
import { Login }  from './pages/authenticationPages/Login';
import Hall from './pages/Hall/Hall';
import { Kitchen } from './pages/Kitchen/Kitchen';
import { reportWebVitals } from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import { Home }  from './pages/authenticationPages/Home';
import { PrivateRoute } from '../src/privateRoute.js';
import { HistoricoPedidos } from './pages/Kitchen/HistoricoPedidos.js';
import { PedidosProntos } from './pages/Hall/PedidosProntos.js';


export const Routes = () => {
    return (
  <BrowserRouter>
    <Switch>      
      <Route component={Home} exact path="/"/>
      <Route component={Login} exact path="/Login"/>
      <Route component={Register} exact path="/Register"/>
      <PrivateRoute path="/historicopedidos" component={HistoricoPedidos} exact
      /> 
      <PrivateRoute component={PedidosProntos} exact path="/PedidosProntos"/>
      <PrivateRoute component={Hall} exact path="/Hall"/>
      <PrivateRoute component={Kitchen} exact path="/Kitchen"/>
    </Switch>  
  </BrowserRouter>
 
);
 }
