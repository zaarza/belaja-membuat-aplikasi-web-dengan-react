import React from "react";
import NoteCard from "./NoteCard";

function NotesCategory({ categoryTitle, datas, onMoveToArchivedHandler, onMoveToUnarchivedHandler, onDeleteHandler }) {
  return (
    <div className="notes-category">
      <h2 className="notes-category__title">{categoryTitle}</h2>
      {datas.length !== 0 ? (
        <div className="notes-list">
          <NoteCard onDeleteHandler={onDeleteHandler} onMoveToArchivedHandler={onMoveToArchivedHandler} onMoveToUnarchivedHandler={onMoveToUnarchivedHandler} datas={datas} />
        </div>
      ) : (
        <p className="emptyData">Saat ini data masih kosong!</p>
      )}
    </div>
  );
}

export default NotesCategory;
