import React from "react";

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
            <button className="btn-primary">
              <p>билеты</p>
            </button>
            <button>
              <p>Встреча</p>
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper last-release">
        <h2 className="concerts-title">Последний релиз: </h2>
        <h3 className="concerts-title">Luverance - Пой </h3>
        <img
          className="release-cover"
          src="src/assets/releases/poi.jpg"
          alt="new release"
        />
        <h2 className="concerts-title">Слушать на всех площадках </h2>
      </div>
    </section>
  );
};

export default CurrentConcert;
