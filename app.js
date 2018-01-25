const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];
switch (command) {
  case 'add': {
    const note = notes.addNote(argv.title, argv.body);
    note
      ? console.log('Note Created!')
      : console.log('Note Already present!');
    break;
  }
  case 'read': {
    const note = notes.getNote(argv.title);
    if (note.length == 0) {
      console.log('No Notes Added!');
    } else {
      console.log('Note Title: ', note[0].title);
      console.log('Note Body: ', note[0].body);
    }
    break;
  }
  case 'remove': {
    const isNoteRemoved = notes.removeNote(argv.title);
    isNoteRemoved
      ? console.log(`Note ${argv.title} removed!`)
      : console.log('Note did not remove!');
    break;
  }
  default: console.log('Command not recognized!');
}
