import React, { useState } from "react";
import CreateNote from "./CreateNote.jsx";
import ShowNotes from "./ShowNotes.jsx";

function Notes() {
  window.onload = () => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setNotes(notes);
    }
  };
  const [notes, setNotes] = useState([]);
  let notesStyle = {
    padding: "2rem 0",
  };
  return (
    <div className="container" style={notesStyle}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "500",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
      >
        Notes
      </h2>
      <CreateNote notes={notes} setNotes={setNotes} />
      <ShowNotes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default Notes;
