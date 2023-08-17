import React from "react";
import "./EventCard.css";

const EventCard = ({ item }) => {
  return (
    <div className="card">
      <div className="cardDateBox">
        <p>{item.dates.start.localDate}</p>
      </div>
      <p>{item.name}</p>
      <p>{item.Location}</p>
      <p>{item.dates.start.localTime}</p>
    </div>
  );
};

export default EventCard;
