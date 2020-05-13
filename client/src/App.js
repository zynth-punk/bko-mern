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
        <div class="container">

          <h1 className="Bruno-Name">
            Bruno Köppel-Rodriguez
          </h1>
          <h2 className="Bruno-Description">
            Programmer, Tinkerer, and Musician
          </h2>

        </div>
        
				
        <div className="App-button-link">
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://github.com/BrunoKoppel">Github</Button>
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://www.linkedin.com/in/bruno-koppel">LinkedIn</Button>
          <Button className="App-single-button-link" size="lg" variant="dark" href="https://open.spotify.com/artist/5XK2KlEZ95yiEOqE8BcbgE?si=O6LJDkVWTc-bZ6QWzuuuGA">Spotify</Button>
        </div>

      </header>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

    </div>
    
  );
}

export default App;
