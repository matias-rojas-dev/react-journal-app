import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({ id, date, title, body, url }) => {
    const noteDate = moment(date);
    const noteDateDay = noteDate.format('D');
    const noteDateMonth = noteDate.format('M');
    const noteDateYear = noteDate.format('YYYY');

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, { date, title, body, url }))
    }

    return (
        <div onClick={handleEntryClick} className='journal__entry pointer hover animate__animated animate__fadeInDown'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>{title}</p>
                <p className='journal__entry-content'>{body}</p>
            </div>

            <div className='journal__entry-date-box'>
                <h4>{(`${noteDateDay}/${noteDateMonth}/${noteDateYear}`)}</h4>
            </div>

        </div>
    )
}
