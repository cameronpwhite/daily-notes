const notes = [
    {
        id: 1,
        subject: "javascript",
        date: "7-16-2021",
        feeling: "pretty good",
        timeSpent: 4
    },
    {
        id: 2,
        subject: "css",
        date: "7-15-2021",
        feeling: "ok",
        timeSpent: 8
    }
]

const noteAboutToday = {
    id: 3,
    subject: "hair braiding",
    date: "7-14-2021",
    feeling: "bad",
    timeSpent: 1
}

const compunctiousNote = {
    id: 4,
    subject: "compunctiousness",
    date: "7-16-2021",
    feeling: "Compunctious",
    timeSpent: 1
}

notes.push(noteAboutToday, compunctiousNote);


//Loop to iterate through each note and log to console an entry.
for (const note of notes) {
    console.log(`${note.date}
    Today I learned about ${note.subject}
    I feel ${note.feeling} about it.
    I spent ${note.timeSpent} hours on it.
    ---------------------------------------
    `)
}

//Defining search term variable.
const searchTerm = "Compunctious"

//Loop to identify 'feeling' based on searchterm
for (const note of notes) {
    if (note.feeling === "Compunctious") {
        console.log(note)
    }
}