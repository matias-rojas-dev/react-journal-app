import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes } from '../../actions/notes';
export const NotesAppBar = ({ date }) => {
    const momentDate = moment(date).format('dddd, MMMM Do YYYY');
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch(startSaveNotes(active))
    }
    return (
        <div className='notes__appbar'>
            <span>{momentDate}</span>

            <div>
                <button className='btn'>
                    Picture
                </button>
                <button
                    onClick={handleSave}
                    className='btn'>
                    Save
                </button>
            </div>
        </div>
    )
}
