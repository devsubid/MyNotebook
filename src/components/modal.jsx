import React from "react";

function modal({ setShowModal, setConfirmDelete }) {
  let confirm = (e) => {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("showModal");
    setShowModal(false);
    if (e.target.textContent === "Delete") {
      setConfirmDelete(true);
    } else {
      setConfirmDelete(false);
    }
  };
  return (
    <div className="modal showModal">
      <div className="modalWrapper">
        <div className="cross"></div>
        <div className="confirmation">
          <h3>Are you sure you want to delete this note?</h3>
          <div className="buttons">
            <button className="no" onClick={confirm}>
              Cancel
            </button>
            <button className="yes" onClick={confirm}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default modal;
