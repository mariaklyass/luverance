import React from "react";

const CurrentConcert = () => {
  return (
    <section className="hero-concert-content">
      <div className="wrapper">
        <h2>Ближайший концерт: </h2>
        <div className="concert-info">
          <p>Moscow, 25/01/2024</p>
          <p>Location, 19:00</p>
          <a
            href="https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjQyYjU1YWM2ZjI1MzM1M2Y5NzdjZmUxIn0.GF6SqLshIgPv6pp5fAJKP4xkZhK-SxpcVkfgl7J-mRQ&lang=ru&event=64a5dad807e2fa361bfb8ea1&s=1&r=1&org=642b55ac6f253353f977cfe1&city=524901&category=592841f8515e35002dead938&tags=592841f8515e35002dead939%2C%D0%9F%D0%BE%D0%BF%2C592841f8515e35002dead93b%2C%D0%A0%D0%BE%D0%BA"
            target="_blank"
          >
            <p> билеты</p>
          </a>
        </div>
      </div>
      <div className="wrapper">
        <h2>Для связи: </h2>
        <div>
          <p> MGMT Наташа Шавшина</p>
          <p>
            <span>Email: </span>mgmt.luverance@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentConcert;
