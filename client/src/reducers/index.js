import { combineReducers } from 'redux';
import markersList from './markers-list';

const allReducers = combineReducers(
    {
        markers: markersList
    });

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;