import React from "react";

class NewNotesForm extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi awal state
    this.state = {
      title: "",
      limitTitleCharacter: 50,
      body: "",
    };

    // Binding
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // Event handler
  onTitleChangeHandler(event) {
    this.setState(() => {
      if (event.target.value.length !== this.state.limitTitleCharacter + 1) {
        return {
          title: event.target.value,
        };
      }
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.title, this.state.body);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="new-notes-container">
        <h2>Add new note</h2>
        <form id="new-notes__form" onSubmit={this.onSubmitHandler}>
          <div className="title-input__container">
            <p className="limit-character">
              {this.state.title.length} / {this.state.limitTitleCharacter}
            </p>
            <input id="input-title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler} required />
          </div>
          <input type="text" placeholder="Body" id="input-body" value={this.state.body} onChange={this.onBodyChangeHandler} required />
          <button type="submit">+ Add</button>
        </form>
      </div>
    );
  }
}

export default NewNotesForm;
