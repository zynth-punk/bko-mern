import React from 'react';
import {Container, Row} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function Post0002() {
  return (
    <Container style={{marginBottom: "15vmin", color: "#ffffff", font:"Courier"}}>
    <Row style={{ display: "flex", alignItems: "baseline"}}><h6>November 17th 2020</h6></Row>
    <Row><h2 style={{marginRight:"10px", marginBottom: "20px"}}><span><u>2nd EP</u></span></h2></Row>
    <Row><h1><span id="PostHeader">The Net Runner</span></h1></Row>
    <Row><iframe title="Bruno Koppel" style={{display:"flex", alignItems:"Center", margin: "10px"}} src="https://open.spotify.com/embed/album/6qCbuwrkNaILda2y0P821q" width="310" height="380" frameBorder="0" allow="encrypted-media"></iframe>
    </Row>
    <Row>
      <div style={{margin: "2vmin"}}> 
        <b>What sort of noisy and angry music are people going to be listening to in 20 to 50 years from now?</b> What sort of noises will people be headbanging and jumping to?<br></br>
        The Punk attitude is the energy to rebel, to break away from the system that has us contained in a bucket. This album is a vision of the future, to cast that energy into our world and perceive it. 
        I struggled mixing the bass of the kick with the overhelming low humming bass of the synths in the back but I loved it. However those guitar riffs where fun.
        Also that siren, I <b>loved</b> it, it reminds me of the future. The Uncertainty of what's to come, the tension and drive to survive beyond other lives.
      </div>
    </Row>
  </Container>
  );
}

export default Post0002;

