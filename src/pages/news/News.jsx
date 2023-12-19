import React from "react";
import { useState, useEffect } from "react";
import { client } from "../../../client";
const News = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]
        {
          title,
          'slug': slug.current
  }
  `
      )
      .then((data) => {
        setPostData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2>
        Test:
        {postData && postData.map((post, i) => <div key={i}>{post.title}</div>)}
      </h2>
    </>
  );
};

export default News;
