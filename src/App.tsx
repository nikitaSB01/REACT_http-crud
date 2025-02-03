import React from "react";
import NotesList from "./components/NotesList";
import NewNoteForm from "./components/NewNoteForm";
import "./App.css";

interface AppState {
  notes: { id: number; content: string }[];
}

class App extends React.Component<object, AppState> {
  state: AppState = {
    notes: [],
  };

  componentDidMount() {
    this.fetchNotes();
  }

  // выполняет HTTP GET запрос к http://localhost:7070/notes для получения всех заметок.
  fetchNotes = () => {
    fetch("https://react-http-crud-back.onrender.com/notes")
      .then((response) => response.json())
      .then((data) => this.setState({ notes: data }))
      .catch((error) => console.error("Error fetching notes:", error));
  };

  //выполняет HTTP POST запрос для добавления новой заметки.
  handleAddNote = (content: string) => {
    fetch("https://react-http-crud-back.onrender.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 0, content }),
    })
      .then(() => this.fetchNotes())
      .catch((error) => console.error("Error adding note:", error));
  };

  //выполняет HTTP DELETE запрос для удаления заметки.
  handleDeleteNote = (id: number) => {
    fetch(`https://react-http-crud-back.onrender.com/notes/${id}`, {
      method: "DELETE",
    })
      .then(() => this.fetchNotes())
      .catch((error) => console.error("Error deleting note:", error));
  };

  render() {
    return (
      <div className="app-container">
        <h1>
          Notes{" "}
          <button className="refresh-button" onClick={this.fetchNotes}>
            ⟳
          </button>
        </h1>
        <NotesList
          notes={this.state.notes}
          onDelete={this.handleDeleteNote}
        ></NotesList>
        <NewNoteForm onAdd={this.handleAddNote} />
      </div>
    );
  }
}

export default App;
