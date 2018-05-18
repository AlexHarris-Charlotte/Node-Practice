console.log('starting Notes.js');
const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notesData.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notesData.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    const duplicateNotes = notes.filter( note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }   
}

const getAll = () => {
    const previousNotes = fs.readFileSync('notesData.json', 'utf8', (err, data) => {
        console.log(err);
    });
    return JSON.parse(previousNotes);
}

const readNote = title => {
    const previousNotes = fetchNotes();
    return previousNotes.find( note => note.title === title);
}

const removeNote = title => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter( note => note.title !== title);
    saveNotes(filteredNotes);
}



module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}

