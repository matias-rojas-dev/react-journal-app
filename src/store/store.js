import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Importamos el store en el punto más alto de la aplicación
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);