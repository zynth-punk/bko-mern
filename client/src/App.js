import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
//import PostBlock from './components/PostBlock';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})
function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Container style={{padding: "5vmin"}} fluid>
          <Row style={{ display: "flex", flexDirection: "row"}}>
            <Col sm={4} className="bg-dark" style={{margin: "0.5vmin", padding: "2vmin"}}>
              <div style={{fontFamily: "futura", fontSize: "20px" , color: "#FFFFFF" ,textAlign: "justify", textJustify: "auto"}} >
                <h2>Programmers and Musicians</h2>
                <span>
                  Hi! My name is Bruno Köppel. I began my coding journey when I was 14 years old. I began with C language. Around the same age I grew interested in music and began mixing and experimenting with synthesizers and samples. I found music production to be a rewarding pursuit, one that still drives me.
                </span>
              </div>
            </Col>
            <Col sm={7} className="bg-light" style={{margin: "0.5vmin", padding: "2vmin"}}>
            <iframe title="Bruno Koppel" style={{margin: "10px"}} src="https://open.spotify.com/embed/album/2nVwxvBHJ2trq8sFdHykp0" width="310" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <div style={{fontFamily: "futura", margin: "2vmin", textAlign: "justify", textJustify: "auto"}}>
              I wanted to release an album with different styles that showcases different stories. I couln't set my my on a specific genre because I don't believe in them: Music is just sounds happening in a sequence of time.<br></br><br></br> 
              <b>My favorite songs are:
                <li>Butterfly Effect</li>
                <li>Seen the Truth With My Third Eye</li></b> <br></br>
            </div>
            </Col>
          </Row>
        </Container>

      </ApolloProvider>
    
        <footer style={{fontFamily: "futura", padding: "5vmin"}}>
          <p>Author: Bruno Köppel @2020</p>
        </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
