import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Post0001 from "./posts/Post0001";
import Post0002 from "./posts/Post0002";
import Post0003 from "./posts/Post0003";

function BlogBlock() {
  return (
    <>
      <Post0003 />
      <Post0002 />
      <Post0001 />
    </>
  );
}

export default BlogBlock;
