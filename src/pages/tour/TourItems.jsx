import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourItems } from "../../reducers/tourReducer";

const TourItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

  return (
    <div>
      Concerts //{" "}
      {/* <section className="tour">
        <div>
          <h2>Концерты</h2>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </div>
      </section> */}
    </div>
  );
};

export default TourItems;
