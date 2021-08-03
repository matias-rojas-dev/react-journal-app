// Función que nos permite obtener los datos desde la base de datos

import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get()
    const notes = [];

    notesSnap.forEach(note => {
        notes.push({
            id: note.id,
            ...note.data()
        })
    })

    console.log(notes)

    return notes;
}