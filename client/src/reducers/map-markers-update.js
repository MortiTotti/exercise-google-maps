import { actionTypes } from 'Constants';

const { MARKERS_UPDATE: actionType } = actionTypes;

//-------------------- reducer implementation
const mapMarkersUpdate = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionType.UPDATE_REQUESTED: {
            return Object.assign({}, state, { isLoading: true, error: null });
        }
        case actionType.UPDATE_FAILED: {
            // TODO: reducer logger >> must call an error logger
            return Object.assign({}, state, {
                isLoading: false,
                error: { message: payload || "No error message specified" }
            });
        }
        case actionType.UPDATE_SUCCEEDED: {
            const newMarkers = state.markers.map(t => t.id != payload.id ? t : {...payload.marker});
            return Object.assign({}, state, { isLoading: false, markers: newMarkers, error: null });
        }
        default: return state;
    }
};

export default mapMarkersUpdate;
