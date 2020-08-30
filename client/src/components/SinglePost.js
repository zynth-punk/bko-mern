import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.min.css';

import Post from './posts/Post0001'

function BlogBlock() {
  return (
    <>
      <Post/>
    </>
  );
}

export default BlogBlock;
