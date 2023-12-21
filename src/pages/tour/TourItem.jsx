import React from "react";
import Icon from "../../components/icon/Icon";
const TourItem = ({
  concertDate,
  city,
  location,
  ticketLink,
  soldOut,
  eventReport,
  i,
}) => {
  return (
    <li className="tour-item">
      <p>
        {city} / {location}
      </p>

      <div>
        {new Date(concertDate).toLocaleDateString("ru-Ru", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        })}
      </div>

      {!soldOut ? (
        <a href={ticketLink} target="_blank">
          <>
            <span>Билеты</span>
            <Icon name="arrow-right" />
          </>
        </a>
      ) : (
        <button className="soldout">SOLD OUT</button>
      )}
    </li>
  );
};

export default TourItem;
