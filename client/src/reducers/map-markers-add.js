import { actionTypes } from 'Constants';

const { MARKERS_ADD: actionType } = actionTypes;

//-------------------- reducer implementation
const mapMarkersAdd = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionType.ADD_REQUESTED: {
            return Object.assign({}, state, { isLoading: true, error: null });
        }
        case actionType.ADD_FAILED: {
            // TODO: reducer logger >> must call an error logger
            return Object.assign({}, state, {
                isLoading: false,
                error: { message: payload || "No error message specified" }
            });
        }
        case actionType.ADD_SUCCEEDED: {
            return Object.assign({}, state, { isLoading: false, markers: [...state.markers, payload], error: null });
        }
        default: return state;
    }
};

export default mapMarkersAdd;
