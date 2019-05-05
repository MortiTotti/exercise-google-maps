import { actionTypes, urls } from 'Constants';
import { HttpClient } from 'Helpers';

//-------------------- action initializiation
const { MARKERS_ADD: actionType } = actionTypes;

//-------------------- action creators
const _requested = () => ({
    type: actionType.ADD_REQUESTED
});

const _failed = ({ code, message }) => ({
    type: actionType.ADD_FAILED,
    payload: {
        code,
        message,
    }
});

const _received = (result) => ({
    type: actionType.ADD_SUCCEEDED,
    payload: result
});

//-------------------- methods
const _api = (data) => HttpClient().postAsync(`${urls.MARKERS}`, data);

const addMarker = (request) => async (dispatch) => {
    dispatch(_requested());
    try {
        let { status, message } = await _api(request);
        if (status) {
            dispatch(_received());
            return Promise.resolve(message);
        } else {
            dispatch(_failed({ message }));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};

export default {
    addMarker
};