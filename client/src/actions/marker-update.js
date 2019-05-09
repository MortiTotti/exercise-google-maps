import { actionTypes, urls } from 'Constants';
import { HttpClient } from 'Helpers';

//-------------------- action initializiation
const { MARKERS_UPDATE: actionType } = actionTypes;

//-------------------- action creators
const _requested = () => ({
    type: actionType.UPDATE_REQUESTED
});

const _failed = (message) => ({
    type: actionType.UPDATE_FAILED,
    payload: message
});

const _received = (result) => ({
    type: actionType.UPDATE_SUCCEEDED,
    payload: result
});

//-------------------- methods
const _api = ({ id, marker }) => HttpClient().putAsync(`${urls.MARKERS}/${id}`, marker);

export const updateMarker = (request) => async (dispatch) => {
    dispatch(_requested());
    try {
        let { status, message, result } = await _api(request);
        if (status) {
            dispatch(_received({ id: request.id, marker: result }));
            return Promise.resolve(message);
        } else {
            dispatch(_failed(message));
            return Promise.reject({ message });
        }
    } catch (error) {
        dispatch(_failed({ message: error.message || error }));
        return Promise.reject(error);
    }
};
