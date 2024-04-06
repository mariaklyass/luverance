import React from "react";
import Release from "/src/assets/releases/poi.jpg";

const CurrentConcert = () => {
  return (
    <section className="hero-concert-content">
      <div className="wrapper nearest-concerts">
        <h2 className="concerts-title">Ближайшие мероприятия: </h2>
        <div className="concert-info">
          <p>Москва</p>
          <p>25/04/2024</p>
          <p>Base</p>
          <div className="btns-tickets">
            <a href="https://google.com" target="_blank">
              <button className="btn-primary">
                <p>билеты</p>
              </button>
            </a>

            <a href="https://google.com" target="_blank">
              {" "}
              <button>
                <p>Встреча</p>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper last-release">
        <h2 className="concerts-title">Последний релиз: </h2>
        <h3 className="concerts-title">Luverance - Пой </h3>
        <img className="release-cover" src={Release} alt="new release" />
        <a href="https://band.link/luverancepoi" target="_blank">
          <h2 className="concerts-title">Слушать на всех площадках </h2>
        </a>
      </div>
    </section>
  );
};

export default CurrentConcert;
