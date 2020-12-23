
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
