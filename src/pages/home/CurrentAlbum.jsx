import React from "react";

const CurrentAlbum = () => {
  return (
    <section>
      <div className="title">
        {" "}
        <h2 className="section-title">Diade</h2>
        <h3 className="section-subtitle">Luverance</h3>
        <h4 className="additional-info">Альтернатива, 2022</h4>
      </div>
      <div className="section-current-album">
        <div className="current-album">
          <div>
            <img src="/images/album-cover.jpg"></img>
          </div>
        </div>
        <div className="current-album_description">
          <h3>Слушать на всех площадках</h3>
          <a href="https://band.link/luverance" target="_blank">
            <button className="btn-icon">
              <img
                className="icon"
                src="/src/assets/icons/bandlink.svg"
                alt="bandlink"
              />{" "}
              bandlink
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentAlbum;
