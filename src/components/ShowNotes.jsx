import React, { useState, useEffect } from "react";

function ShowNotes({
  notes,
  setNotes,
  setShowModal,
  confirmDelete,
  setConfirmDelete,
}) {
  const [element, setElement] = useState(0);
  let reverseNotes = notes.slice();
  let noteElements = () => {
    return reverseNotes.map((note, index) => {
      return (
        <div className="note" key={index}>
          <div className="noteTop">
            <h3>{note.title}</h3>
            <div
              className="svg"
              onClick={() => {
                deleteNote(index);
              }}
              title="Delete this Note"
            ></div>
          </div>
          <div>
            <p>{note.content}</p>
          </div>
        </div>
      );
    });
  };
  let deleteNote = (e) => {
    setShowModal(true);
    setElement(e);
  };
  useEffect(() => {
    if (confirmDelete) {
      let newNotes = reverseNotes.filter((note, index) => {
        return index !== element;
      });
      localStorage.setItem("notes", JSON.stringify(newNotes));
      setNotes(newNotes);
      setConfirmDelete(false);
    }
  });
  return (
    <div className="notes">
      {notes.length !== 0 ? noteElements() : <p>No Notes to Display</p>}
    </div>
  );
}

export default ShowNotes;
