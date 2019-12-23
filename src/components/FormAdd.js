import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default function FormAdd({
  modalIsOpen,
  closeModal,
  handelName,
  handelRating,
  handelYear,
  handelLink,
  handelSubmit
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <form className="form-container">
        <h3 className="form-title">Add a Movie</h3>

        <label>Movie Name</label>
        <input type="text" onChange={handelName} />

        <label>Rating</label>
        <input type="text" onChange={handelRating} />

        <label>Year Of Relase</label>
        <input type="text" onChange={handelYear} />

        <label>Movie Link</label>
        <input type="url" onChange={handelLink} />

        <div className="btn-container">
          <button onClick={handelSubmit}>Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
}
