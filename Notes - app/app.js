// const fs = require('fs')

// fs.writeFileSync("notes.txt", "Welcome to the class Parth!")
// fs.appendFileSync("notes.txt", " It's gonna be a great ride.")


// const add = require("./utils")
// console.log(name);
// console.log(add(25, 25));

// const getNotes = require("./notes")
// console.log(getNotes());

// const validator = require("validator")
// const chalk = require("chalk")
// console.log(validator.isURL("https//mead.io"));
// console.log(chalk.green("Success"));
// console.log(process.argv[2]);

const yargs = require("yargs")
const notes = require("./notes")
const chalk = require("chalk")


yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body message.",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Removing note.",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: "list",
    describe: "List the note",
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "Reading a note",
    builder: {
        title: {
            describe: "Reading the note.",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})
yargs.parse()