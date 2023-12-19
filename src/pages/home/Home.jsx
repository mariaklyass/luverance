import React from "react";
import CurrentConcert from "./CurrentConcert";
import CurrentAlbum from "./CurrentAlbum";

const Home = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <div className="hero-concert">
          {" "}
          <CurrentConcert />
        </div>
        <div className="hero-album">
          {" "}
          <CurrentAlbum />
        </div>
      </section>
    </div>
  );
};

export default Home;
