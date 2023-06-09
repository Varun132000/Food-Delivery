import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import controlsReducer from './Controls/ControlsReducer';
import CartReducer from './CartReducer';
const appReducers = combineReducers({
    controlsReducer:controlsReducer,
    cart:CartReducer
})

const rootReducer = (state, action) => appReducers(state, action);
const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));