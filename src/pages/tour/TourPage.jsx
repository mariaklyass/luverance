import React from "react";
import TourItems from "./TourItems";

const TourPage = () => {
  return (
    <div className="tour-section-wrapper">
      <TourItems />
      {/* if tab 'past' is active, show <PastTourItem/>? + tab with all items*/}
    </div>
  );
};

export default TourPage;
