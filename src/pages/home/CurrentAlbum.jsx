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
            <img src="public/images/album-cover.jpg"></img>
          </div>
        </div>
        <iframe
          width="50%"
          height="450"
          src="https://music.yandex.ru/iframe/album/24092948"
        >
          Слушайте <a href="https://music.yandex.ru/album/24092948">Diade</a> —{" "}
          <a href="https://music.yandex.ru/artist/8947630">Luverance</a> на
          Яндекс Музыке
        </iframe>
      </div>
    </section>
  );
};

export default CurrentAlbum;
