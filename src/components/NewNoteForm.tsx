import React from "react";

interface NewNoteFormProps {
  onAdd: (content: string) => void;
}

interface NewNoteFormState {
  content: string;
}

class NewNoteForm extends React.Component<NewNoteFormProps, NewNoteFormState> {
  state: NewNoteFormState = {
    content: "",
  };

  // обновляет content в состоянии при вводе текста.
  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ content: e.target.value });
  };

  //  при отправке формы вызывает onAdd, передавая текст заметки.
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.content.trim()) {
      this.props.onAdd(this.state.content);
      this.setState({ content: "" });
    }
  };

  render() {
    return (
      <form className="new-note-form" onSubmit={this.handleSubmit}>
        <textarea
          placeholder="New Note"
          value={this.state.content}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NewNoteForm;
