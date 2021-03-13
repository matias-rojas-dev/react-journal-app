import React from 'react'
import { NoteScreen } from '../notes/NoteScreen';
import {Sidebar} from './Sidebar';

//import {NothingSelected} from './NothingSelected'
export const JournalScreen = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar />

            <main>
                <NoteScreen />
            </main>
        </div>
    )
}
