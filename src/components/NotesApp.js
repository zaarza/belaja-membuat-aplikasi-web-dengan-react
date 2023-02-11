import React from "react";
import NotesCategory from "./NotesCategory";
import NewNotesForm from "./NewNotesForm";
import Navbar from "./Navbar";
import { NotesData } from "../utils/NotesData";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state awal
    this.state = {
      data: NotesData(),
      searchText: "",
      tittle: "",
      body: "",
    };

    // Binding
    this.onMoveToArchivedHandler = this.onMoveToArchivedHandler.bind(this);
    this.onMoveToUnarchivedHandler = this.onMoveToUnarchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSearchTextHandler = this.onSearchTextHandler.bind(this);
  }

  // Event handling

  onMoveToArchivedHandler(id) {
    const newData = this.state.data.filter((note) => note.id != id);
    const target = this.state.data.filter((note) => note.id === id)[0];
    this.setState((previousState) => {
      return {
        data: [
          ...newData,
          {
            id: target.id,
            title: target.title,
            body: target.body,
            archived: true,
            createdAt: target.createdAt,
          },
        ],
      };
    });
  }

  onMoveToUnarchivedHandler(id) {
    const newData = this.state.data.filter((note) => note.id != id);
    const target = this.state.data.filter((note) => note.id === id)[0];
    this.setState((previousState) => {
      return {
        data: [
          ...newData,
          {
            id: target.id,
            title: target.title,
            body: target.body,
            archived: false,
            createdAt: target.createdAt,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const newData = this.state.data.filter((note) => note.id != id);
    this.setState((previousState) => {
      return {
        data: [...newData],
      };
    });
  }

  onSubmitHandler(title, body) {
    this.setState((previousState) => {
      return {
        data: [
          ...previousState.data,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: `${new Date()}`,
          },
        ],
      };
    });
    alert(`Note added!`);
  }

  onSearchTextHandler(event) {
    this.setState(() => {
      return {
        searchText: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar onSearchTextHandler={this.onSearchTextHandler} />
        <NewNotesForm onSubmitHandler={this.onSubmitHandler} value={this.state.searchText} />
        <NotesCategory
          onDeleteHandler={this.onDeleteHandler}
          categoryTitle={"Main Notes"}
          datas={this.state.searchText === "" ? this.state.data.filter((item) => item.archived === false) : this.state.data.filter((note) => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()) && note.archived === false)}
          onMoveToArchivedHandler={this.onMoveToArchivedHandler}
          onMoveToUnarchivedHandler={this.onMoveToUnarchivedHandler}
        />
        <NotesCategory
          onDeleteHandler={this.onDeleteHandler}
          categoryTitle={"Archived Notes"}
          datas={this.state.searchText === "" ? this.state.data.filter((item) => item.archived === true) : this.state.data.filter((note) => note.title.toLowerCase().includes(this.state.searchText.toLowerCase()) && note.archived === true)}
          onMoveToArchivedHandler={this.onMoveToArchivedHandler}
          onMoveToUnarchivedHandler={this.onMoveToUnarchivedHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
