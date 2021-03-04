import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//import PostBlock from './components/PostBlock';

import BlogBlock from "./components/BlogBlock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Container
          style={{
            fontFamily: "ubuntu",
            display: "flex",
            padding: "5vmin",
            justifyContent: "center",
          }}
          fluid
        >
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Col
              sm={12}
              md={12}
              lg={4}
              xl={3}
              className="bg-dark"
              style={{ margin: "1vmin", padding: "2vmin", borderRadius: "20px" }}
            >
              <div style={{ fontSize: "20px", color: "#FFFFFF" }}>
                <h2>Bruno Köppel</h2>
                <p>Installation in progress</p>
                <p>[|................................] 1% </p>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={7}
              xl={8}
              className="bg-light"
              style={{ margin: "0.5vmin", padding: "2vmin", borderRadius: "20px"}}
            >
              <BlogBlock />
            </Col>
          </Row>
        </Container>
      </ApolloProvider>

      <footer style={{ fontFamily: "ubuntu", padding: "5vmin" }}>
        <p>Author: Bruno Köppel @2021</p>
      </footer>
    </div>
  );
}

export default App;
