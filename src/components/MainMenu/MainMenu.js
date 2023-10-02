import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="main-menu">
      <h1>SceneIt! Trivia Game</h1>
      <Link to="./BrainGame">
        <Button className="plzDontStopTheMusic" variant="contained" color="primary">
          Don't Stop the Music
        </Button>
      </Link>
    </div>
  );
}

export default MainMenu;