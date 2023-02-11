import React from "react";
import DeleteButton from "./DeleteButton";

function NoteCard({ datas, onMoveToArchivedHandler, onMoveToUnarchivedHandler, onDeleteHandler }) {
  return datas.map((note) => (
    <div className="note-card" key={note.id} id={note.id}>
      <div className="card-head">
        <h4 className="note-title">{note.title}</h4>
      </div>
      <div className="card-body">
        <p className="note-body">{note.body}</p>
      </div>
      <div className="card-action">
        {note.archived === false ? <button onClick={() => onMoveToArchivedHandler(note.id)}>Archive</button> : <button onClick={() => onMoveToUnarchivedHandler(note.id)}>Unarchive</button>}
        <DeleteButton onDeleteHandler={onDeleteHandler} id={note.id} />
      </div>
      <br />
      <p className="createdAt-text">Created at : {note.createdAt}</p>
    </div>
  ));
}

export default NoteCard;
