import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './MainMenu.js';
import BrainGame from './BrainGame.js';

function App() {
  return (
    <Router>
      <Switch>
         {/* Define your routes */}
         <Route path="/" exact component={MainMenu} />
        <Route path="/BrainGame" component={BrainGame} />
      </Switch>
    </Router>
  );
}

export default App;
