
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addMarker } from "Actions";
import { actionTypes, urls } from 'Constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('map markers add async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    const request = { title: 'Leipzig', lat: 51.33, lng: 12.37 };

    it('creates MARKERS_ADD.ADD_SUCCEEDED action type when adding a map marker succeed', () => {
        // arrange
        const url = `${urls.MARKERS}`;
        const response = { id: 'newid1200045', ...request };

        fetchMock
            .postOnce(url,
                {
                    body: {
                        "status": true,
                        "result": response
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_ADD.ADD_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_ADD.ADD_SUCCEEDED, payload: response }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(addMarker(request)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates MARKERS_ADD.ADD_FAILED action type when adding a map marker failed', () => {
        // arrange
        const url = `${urls.MARKERS}`;
        const message = "Some unexpected error";

        fetchMock
            .postOnce(url,
                {
                    body: {
                        "status": false,
                        "message": message
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: actionTypes.MARKERS_ADD.ADD_REQUESTED, payload: undefined },
            { type: actionTypes.MARKERS_ADD.ADD_FAILED, payload: message }
        ]
        const store = mockStore({ markers: {} })

        // act, assert
        return store.dispatch(addMarker(request))
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            });
    });
});
