import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate.jsx';
import Detail from './components/Detail.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route exact path = '/home' component = {Home}/>
        <Route path = '/pokemon' component = {PokemonCreate}/>
        <Route path = '/details/:id' component = {Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
