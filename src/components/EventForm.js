import React, { useState } from "react";

function EventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Religious");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      addEvent({ title, date, category });
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: "#fff",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>Add New Event</h3>
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Religious</option>
        <option>Social</option>
        <option>Charity</option>
      </select>
      <button type="submit" style={{ marginTop: "10px" }}>Add Event</button>
    </form>
  );
}

export default EventForm;