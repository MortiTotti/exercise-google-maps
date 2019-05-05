import { actionTypes } from 'Constants';

//-------------------- reducer initializiation
const { MARKERS_LIST: actionType } = actionTypes;
const initState = {
    isLoading: false,
    error: { message: "" },
    markers: []
};

//-------------------- reducer implementation
const markersList = (state = initState, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionType.LOAD_REQUESTED: {
            return Object.assign({}, state, { isLoading: true, error: null });
        }
        case actionType.LOAD_FAILED: {
            // TODO: reducer logger >> must call an error logger
            return Object.assign({}, state, {
                isLoading: false,
                error: { message: payload || "No error message specified" }
            });
        }
        case actionType.LIST_RECEIVED: {
            return Object.assign({}, state, { isLoading: false, markers: payload, error: null });
        }
        default: return state;
    }
};

export default markersList;
