import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Image, Navbar, Nav, Button } from 'react-bootstrap'
import './index.css';
import App from './App';
import blog from './subpages/blog'
import * as serviceWorker from './serviceWorker';
import Brunokoppel2 from './images/brunokoppel2.jpg';
import BG from './images/background.jpg';
import GH from './images/GH.png'
import LI from './images/LinkedInBnW.png'
import SP from './images/spotifyBnW.png'
import IG from './images/IG-BnW.png'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Route exact path='/blog' component={blog} />
    </Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Button size="sm" variant="light">
          <h3 style={{padding: "0.4vmin",margin: "0.2vmin" , color: "#000000", fontSize: "5vmin", fontFamily: "Monaco"}}>Bruno Köppel</h3>
        </Button>
      </Navbar.Brand>
      <Nav className="mr-auto" style={{display: "flex", flexDirection: "row"}}>
        
        <Nav.Link style={{margin: "0.2vmin" }} href="https://github.com/BrunoKoppel">
          <Button size="sm" variant="light">
            <Image src={GH} style={{width: "5vmin"}} alt="logo" rounded fluid/>
          </Button>
        </Nav.Link>

        <Nav.Link style={{margin: "0.2vmin" }} href="https://www.linkedin.com/in/bruno-koppel">
          <Button size="sm" variant="light">
            <Image src={LI} style={{width: "5vmin"}} alt="logo" rounded fluid/>
          </Button>
        </Nav.Link>

        <Nav.Link style={{margin: "0.2vmin" }} href="https://open.spotify.com/artist/5XK2KlEZ95yiEOqE8BcbgE?si=O6LJDkVWTc-bZ6QWzuuuGA">
          <Button size="sm" variant="light">
            <Image src={SP} style={{width: "5vmin"}} alt="logo" rounded fluid/>
          </Button>
        </Nav.Link>

        <Nav.Link style={{margin: "0.2vmin" }} href="https://www.instagram.com/bruno_koppel/">
          <Button size="sm" variant="light">
            <Image src={IG} style={{width: "5vmin"}} alt="logo" rounded fluid/>
          </Button>
        </Nav.Link>

        <Nav.Link style={{margin: "0.2vmin", right: "2vmin" , position: "absolute"}} aria-controls="basic-navbar-nav">
          <Button size="sm" variant="light">
            <Image src={Brunokoppel2} style={{width: "5vmin"}} alt="logo" rounded fluid/>
            
          </Button>
        </Nav.Link>
        
      </Nav>
    </Navbar>
    <App style={{backgroundImage: `url(${BG}))`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
