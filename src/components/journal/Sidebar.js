import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';
export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(startLogout());
    }

    const handleAddNew = () => {
        dispatch(startNewNote())
    }


    const { name } = useSelector(state => state.auth);


    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar animate__animated animate__bounceInLeft animate__slower'>
                <h3 className='mt-5'>
                    <i className='far fa-moon' />
                    <span>{name}</span>
                </h3>

                <button onClick={handleLogOut} className='btn'>
                    Log Out
                </button>
            </div>

            <div className='journal__new-entry' onClick={handleAddNew}>
                <i className='far fa-calendar-plus fa-5x animate__animated animate__bounceInLeft animate__slow' />
                <p className='mt-5 animate__animated animate__bounceInLeft animate__slow'>New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
