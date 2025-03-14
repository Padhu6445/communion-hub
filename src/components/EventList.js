import React from "react";

function EventList({ events, filter }) {
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div style={{ marginTop: "20px" }}>
      {filteredEvents.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredEvents.map((event, index) => (
            <li key={index} style={{
              background: "#fff",
              margin: "10px 0",
              padding: "15px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <strong>{event.title}</strong> - {event.date} ({event.category})
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
}

export default EventList;