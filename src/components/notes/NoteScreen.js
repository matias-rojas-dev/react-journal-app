import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'
export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, date } = formValues;
    const activedId = useRef(note.id)

    useEffect(() => {
        if (note.id !== activedId.current) {
            reset(note);
            activedId.current = note.id
        }
    }, [note, reset]);

    const handleDelete = () => {
        const deleteThisId = activedId.current;
        dispatch(startDeleting(deleteThisId))
    }

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch])

    return (
        <div className='notes__main-content'>
            <NotesAppBar date={date} />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img
                            src={`${note.url}`}
                            alt={`${title}`}
                        />

                    </div>
                }

            </div>
            <button className="btn btn-danger" onClick={handleDelete}>
                Delete
            </button>
        </div >
    )
}
