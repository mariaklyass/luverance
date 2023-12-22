import React from "react";
import { useState, useEffect } from "react";
import { client } from "../../../client";
import imageUrlBuilder from "@sanity/image-url";

const News = () => {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const [postData, setPostData] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]
        {
          title,
          publishedDate,
          "image": image.asset->url,
          body,
         
        } 
  `
      )
      .then((data) => {
        setPostData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="section-news">
      <div>
        {postData &&
          postData.map((post, i) => (
            <div key={i} className="news-piece">
              <p>{post.publishedDate}</p>
              {post.body.map((block, j) => (
                <React.Fragment key={j}>
                  {block._type === "block" && (
                    <p>{block.children.map((child) => child.text).join("")}</p>
                  )}
                </React.Fragment>
              ))}
              <img
                className="news-photo"
                src={
                  urlFor(post.image)
                    // .url()
                    .auto("format")
                  // .fit("max")
                  // .width(720)
                  // .toString()}
                }
              ></img>
            </div>
          ))}
      </div>
    </section>
  );
};

export default News;
