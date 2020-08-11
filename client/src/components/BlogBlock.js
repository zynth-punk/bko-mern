import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'bootstrap/dist/css/bootstrap.min.css';

import Post0001 from './posts/Post0001'
import Post0002 from './posts/Post0002'

function BlogBlock() {
  return (
    <>
      <Post0002/>
      <Post0001/>
    </>
  );
}

export default BlogBlock;
