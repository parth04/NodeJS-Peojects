const fs = require("fs")
const chalk = require("chalk")
const getNotes = () => {
    return ("Welcome to the class Parth!")
}


const addNotes = (title, body) => {
    const notes = loadNote()
    // const duplicatesNotes = notes.filter((note) => note.title === title)
    // const duplicatesNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    // if (duplicatesNotes.length === 0) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log("New note added!");
    // }
    // else {
    //     console.log("Note title already present.");
    // }
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added!");
    }
    else {
        console.log("Note title already present.");
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJson)
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    const notes = loadNote()

    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note " + title + " deleted successfully✔  "));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("Note " + title + " not found❌  "));

    }
}

const listNotes = () => {
    const notes = loadNote()
    notes.forEach(element => {
        console.log(chalk.inverse(element.title));

    });
}
const readNote = (title) => {
    const notes = loadNote()
    const noteFound = notes.find((note) => note.title === title)
    if (!noteFound) {
        console.log(chalk.red.inverse("Note not found. ❌ "));
    } else {
        console.log(chalk.inverse(noteFound.title) + " : \n" + noteFound.body);
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
