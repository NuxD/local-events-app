import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import "./DataDisplay.css"

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/events") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Data from API:</h2>
      <ul className="DataList">
        {data.map((item) => (
          <EventCard key={item.id} item={item}></EventCard> // Adjust according to your API response
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
