import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Brunokoppel1 from './images/brunokoppel1.JPG';
import Brunokoppel2 from './images/brunokoppel2.jpg';
//import BG from './images/background.png';

import './App.css';

function App() {
  return (
    
    <div className="App">

      <header className="App-header">
        <img src={Brunokoppel2} className="App-logo" alt="logo" />
        <h1 className="Bruno-Name">
          Bruno Köppel-Rodriguez
        </h1>
        <h2 className="Bruno-Description">
          Programmer, Tinkerer, and Musician
        </h2>
				
        <div className="App-button-link">
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://github.com/BrunoKoppel">Github</Button>
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://www.linkedin.com/in/bruno-koppel">LinkedIn</Button>
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://open.spotify.com/artist/5XK2KlEZ95yiEOqE8BcbgE?si=O6LJDkVWTc-bZ6QWzuuuGA">Spotify</Button>
        </div>

      </header>
    </div>
  );
}

export default App;
