import React from "react";
// import Icon from "../../components/icon/Icon";
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
      <p>{city}</p>

      <div>
        {new Date(concertDate).toLocaleDateString("ru-Ru", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        })}
      </div>

      <p>{location}</p>
      <div className="btns-tickets">
        {" "}
        {!soldOut ? (
          <a href={ticketLink} target="_blank">
            <button className="tickets">
              <span>Билеты</span>
              {/* <Icon name="arrow-right" /> */}
              <span> &rarr;</span>
            </button>
          </a>
        ) : (
          <button className="soldout">SOLD OUT</button>
        )}
        <button>ВСТРЕЧА</button>
      </div>
    </li>
  );
};

export default TourItem;
