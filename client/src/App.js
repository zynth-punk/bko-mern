import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      
      <Container style={{padding: "5vmin"}} fluid>
        <Row style={{ display: "flex", flexDirection: "row"}}>
          <Col sm={2} className="bg-dark" style={{margin: "0.5vmin", padding: "2vmin"}}>
            <div style={{fontFamily: "monaco", color: "#FFFFFF" ,textAlign: "justify", textJustify: "inter-character"}} >
              "As a native Cuban, I was lead to believe that my performance and freedom were tied to what the Cuban government thought I would be best at. But once I left the island, I was blessed with the opportunity to pursue the freedom and the dreams that appeal to my personal desires." 
            </div>
          </Col>
          <Col sm={9} className="bg-light" style={{margin: "0.5vmin", padding: "2vmin"}}>
            <p>
              <div style={{fontFamily: "monaco", fontSize: "20px",textAlign: "justify", textJustify: "inter-character"}}>
                Hello traveller, i'm just doing some work here on my page. i'm working on something very special for my platform, something that I've been planning for a while. It may take me a while to get out in time for you to enjoy but for now you can still access my regular links right next to my name. Enjoy my page and conctact me for any work!
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    
        <footer>
          <p>Author: Bruno Köppel @2020</p>
        </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
