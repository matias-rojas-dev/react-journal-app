import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes))
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <BrowserRouter>
            <div >

                <Switch>
                    <PublicRoute isAuthenticated={isLoggedIn} path='/auth' component={AuthRouter} />
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path='/' component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>

            </div>
        </BrowserRouter>
    )
}
