import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote.jsx";
import ShowNotes from "./ShowNotes.jsx";
import Modal from "./Modal.jsx";

function Notes() {
  const [showModal, setShowModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setNotes(notes);
    }
  }, []);
  const [notes, setNotes] = useState([]);
  let notesStyle = {
    padding: "2rem 0",
  };
  return (
    <div className="container" style={notesStyle}>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          setConfirmDelete={setConfirmDelete}
        />
      ) : null}
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
      <ShowNotes
        notes={notes}
        setNotes={setNotes}
        showModal={showModal}
        setShowModal={setShowModal}
        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}
      />
    </div>
  );
}

export default Notes;
