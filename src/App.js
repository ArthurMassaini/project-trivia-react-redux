import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Game from './pages/Game';

export default function App() {
  return (
    <Switch className="App">
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
    </Switch>
  );
}
