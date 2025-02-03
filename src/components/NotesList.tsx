import React from "react";
import Note from "./Note";

interface NotesListProps {
  notes: { id: number; content: string }[];
  onDelete: (id: number) => void;
}

class NotesList extends React.Component<NotesListProps> {
  render() {
    return (
      <div className="notes-list">
        {this.props.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default NotesList;
