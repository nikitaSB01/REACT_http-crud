import React from "react";

interface NoteProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

class Note extends React.Component<NoteProps> {
  hendleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="note-card">
        <p className="note-card__p">{this.props.content}</p>
        <button className="delete-button" onClick={this.hendleDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Note;
