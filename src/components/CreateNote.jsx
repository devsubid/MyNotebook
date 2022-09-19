import React from "react";

function CreateNote({ notes, setNotes }) {
  let addNote = (e) => {
    e.preventDefault();
    let noteTitle = document.querySelector("input[type='text']");
    let noteContent = document.querySelector("textarea");
    // noteTitle.value = noteContent.value = "";
    let newNote = {
      title: noteTitle.value,
      content: noteContent.value,
    };
    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };
  return (
    <div>
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "200",
        }}
      >
        Create new Note
      </h3>
      <form
        className="inputs"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Write a note..." cols="30" rows="7" />
        <button type="submit" onClick={addNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
