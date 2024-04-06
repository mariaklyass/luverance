import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTourItems } from "../../reducers/tourReducer";
import TourItem from "./TourItem";
import { sortByDate } from "../../utils/common";

const TourItems = () => {
  const dispatch = useDispatch();

  const { items = [], isLoading } = useSelector(({ tour }) => tour);

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

  const currentConcerts = sortByDate(
    items
      .filter(
        ({ ticketLink, concertDate }) =>
          new Date(concertDate) > new Date() && ticketLink
      )
      .filter((_, i) => i < 6)
  );

  const pastConcerts = items.filter(
    ({ soldOut, ticketLink }) => soldOut && ticketLink
  );
  //const nextConcert = items.filter(({ soldOut, ticketLink }) => !soldOut && ticketLink).filter((_, i) => i=1);
  // to show only 1 next concert

  return (
    <div className="section-concerts">
      <h2 className="concerts-heading">Ближайшие концерты</h2>
      {isLoading ? (
        "Loading"
      ) : (
        <div className="concerts">
          <ul className="tour-list">
            {currentConcerts.map((item, i) => (
              <TourItem {...item} i={i} key={i} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TourItems;
