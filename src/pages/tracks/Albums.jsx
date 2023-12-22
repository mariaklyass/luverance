import React from "react";
import Tracks from "./Tracks";

const Albums = () => {
  return (
    <section className="section-albums">
      {" "}
      <div className="album-description">
        {" "}
        <h2>Diade</h2>
        <h3>2022</h3>
        <a href="https://bfan.link/diade" target="_blank" className="link">
          <div>Слушать</div>
        </a>
      </div>
      <img className="album-cover" src="/images/album-cover.jpg"></img>
    </section>
  );
};

export default Albums;
