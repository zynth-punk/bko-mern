import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.min.css';


function Post0001() {
  return (
      <Container style={{marginBottom: "15vmin"}}>
        <Row style={{ display: "flex", alignItems: "baseline"}}><h6>June 23th 2020</h6></Row>
        <Row><h2 style={{marginRight:"10px", marginBottom: "20px"}}><span><u>Album Release</u></span></h2></Row>
        <Row><h1><span id="PostHeader">Revelation</span></h1></Row>
        <Row><iframe title="Bruno Koppel" style={{display:"flex", alignItems:"Center", margin: "10px"}} src="https://open.spotify.com/embed/album/2nVwxvBHJ2trq8sFdHykp0" width="310" height="380" frameBorder="0" allow="encrypted-media"></iframe>
        </Row>
        <Row>
          <div style={{margin: "2vmin"}}> 
            <b>Favorites:
            <li>Butterfly Effect</li>
            <li>Seen the Truth With My Third Eye</li></b> <br></br><br></br>
            I wanted to release an album with different styles that showcases different stories. I couln't set my mind on a specific genre because I don't believe in them: Music is just sounds happening in a sequence of time.
          </div>
        </Row>
      </Container>
  );
}

export default Post0001;
