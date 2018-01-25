const _ = require('lodash');

const addNote = (title, body) => {
  console.log('Adding note!');
  console.log(`Title: ${title}\nBody: ${body}`);
};

const getAll = () => {
  console.log('List all notes!');
};

const getNote = (title) => {
  console.log('Reading note!');
  console.log(`Title: ${title}`);
};

const removeNote = (title) => {
  console.log('Removing note!');
  console.log(`Title: ${title}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
