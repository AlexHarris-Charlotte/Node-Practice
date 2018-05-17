console.log('starting Notes.js');
const fs = require('fs');


const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    try {
        let notesString = fs.readFileSync('notesData.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    const duplicateNotes = notes.filter( note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notesData.json', JSON.stringify(notes));
    }   
}

const getAll = () => {
    fs.readFileSync('./notesData.txt', 'utf8', (err, data) => {
        console.log(JSON.parse(data));
    });
}

const readNote = title => {
    console.log(`Reading the ${title} note`);
}

const removeNote = title => {
    console.log(`Removing note with the title of ${title}`);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}

