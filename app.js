console.log('starting app.js');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];


switch(command) {
    case 'add':
        let note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Your note has been created.')
            console.log('--');
            console.log(`Note Title: ${note.title}`);
            console.log(`Note Body: ${note.body}`);
        } else {
            console.log("An error has occurred. The Note title has either been created or a syntax error has occurred");
        }
        break;
    case 'list': 
        const previousNotes = notes.getAll();
        previousNotes.forEach( note => {
            console.log(`\nTitle: ${note.title}`);
            console.log(`Body: ${note.body}`);
        })
        break;
    case 'read': 
        let requestedNote = notes.readNote(argv.title);
        console.log(`\nTitle: ${requestedNote.title}`);
        console.log(`Body: ${requestedNote.body}`);
        break;
    case 'remove': 
        const foo = notes.removeNote(argv.title);
        console.log(`The note with Title: ${argv.title} has successfully been removed`);
        break;
    default:
        console.log('Command not recognized....')
        break;
}
