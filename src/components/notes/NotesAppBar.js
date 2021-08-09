import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../actions/notes';
export const NotesAppBar = ({ date }) => {
    const momentDate = moment(date).format('dddd, MMMM Do YYYY');
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch(startSaveNotes(active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            dispatch(startUploading(file))
        }
    }

    return (
        <div className='notes__appbar'>
            <span>{momentDate}</span>
            <input
                id="fileSelector"
                type='file'
                name="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    onClick={handlePictureClick}
                    className='btn'>
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
