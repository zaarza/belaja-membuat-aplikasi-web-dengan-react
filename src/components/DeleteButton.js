import React from "react";

function DeleteButton({ onDeleteHandler, id }) {
  return (
    <>
      <button onClick={() => onDeleteHandler(id)} className="delete-button">
        [-] Delete
      </button>
    </>
  );
}

export default DeleteButton;
