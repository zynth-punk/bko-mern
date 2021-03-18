import React from 'react';
import {Container, Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function Post0001() {
  return (
      <Container style={{marginBottom: "15vmin", color: "#ffffff"}}>
        <Row style={{ display: "flex", alignItems: "baseline"}}><h6>April 5th 2020</h6></Row>
        <Row><h2 style={{marginRight:"10px", marginBottom: "20px"}}><span><u>The 1st EP</u></span></h2></Row>
        <Row><h1><span id="PostHeader">Revelation</span></h1></Row>
        <Row><iframe title="Bruno Koppel" style={{display:"flex", alignItems:"Center", margin: "10px"}} src="https://open.spotify.com/embed/album/2nVwxvBHJ2trq8sFdHykp0" width="310" height="380" frameBorder="0" allow="encrypted-media"></iframe>
        </Row>
        <Row>
          <div style={{margin: "2vmin"}}> 
            This is the first album that I felt like I could put online. 
            While some songs are not well mixed and lack the sound design I was looking for, others reflect an emotion that I loved how they came to be. 
            This is the Point A of a map, showing where it all began. 
            The first iteration.
            <br></br><br></br>

            <b>My favorite one --{'>'} Schmetterling</b>
          </div>
        </Row>
      </Container>
  );
}

export default Post0001;
