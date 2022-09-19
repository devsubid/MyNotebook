import React from "react";

function ShowNotes({ notes, setNotes }) {
  let reverseNotes = notes.slice().reverse();
  let deleteNote = (e) => {
    let newNotes = reverseNotes.filter((note, index, reverse) => {
      return index !== e;
    });
    setNotes(newNotes.reverse());
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  return (
    <div className="notes">
      {notes.length !== 0 ? (
        reverseNotes.map((note, index) => {
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
              <p>{note.content}</p>
            </div>
          );
        })
      ) : (
        <p>No Notes to Display</p>
      )}
    </div>
  );
}

export default ShowNotes;
