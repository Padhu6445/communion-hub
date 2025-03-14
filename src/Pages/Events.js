import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import "../App.css";

function Events() {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-03-15", category: "Charity" },
    { title: "Interfaith Dialogue", date: "2025-03-20", category: "Religious" }
  ]);

  const [filter, setFilter] = useState("All");

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="container">
      <h1 style={{ color: "#007bff" }}>Event Listings</h1>
      <label style={{ fontWeight: "bold" }}>Filter by Category: </label>
      <select onChange={(e) => setFilter(e.target.value)} style={{ marginLeft: "10px" }}>
        <option>All</option>
        <option>Religious</option>
        <option>Social</option>
        <option>Charity</option>
      </select>
      <EventList events={events} filter={filter} />
      <EventForm addEvent={addEvent} />
    </div>
  );
}

export default Events;