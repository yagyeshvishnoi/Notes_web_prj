import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function delNotes(noteTitle) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes) => notes.title != noteTitle);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          func={delNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
