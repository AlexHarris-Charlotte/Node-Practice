console.log('starting app.js');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];


switch(command) {
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list': 
        notes.getAll();
        break;
    case 'read': 
        notes.readNote(argv.title);
        break;
    case 'remove': 
        notes.removeNote(argv.title);
        break;
    default:
        console.log('Command not recognized....')
        break;
}
