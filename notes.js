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

notes.push(noteAboutToday);


for (const note of notes) {
    console.log(`${note.date}
    Today I learned about ${note.subject}
    I feel ${note.feeling} about it.
    I spent ${note.timeSpent} hours on it.
    ---------------------------------------
    `)
}