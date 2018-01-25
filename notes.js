const _ = require('lodash');
const fs = require('fs');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title == title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getNote = (title) => {
  let notes = fetchNotes();
  return notes.filter(note => note.title == title);
};

const removeNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter((note) => note.title != title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length;  // true: note removed
};

module.exports = {
  addNote,
  getNote,
  removeNote
};
