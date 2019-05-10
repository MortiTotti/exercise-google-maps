import mapMarkers from 'Reducers/map-markers'
import { actionTypes } from 'Constants';

describe('map marker add reducer', () => {

    it('should handle the map marker add request action', () => {

        // arrange
        const expectedState = {
            isLoading: true,
            error: null,
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_ADD.ADD_REQUESTED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the add map marker failed action', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "Some unexpected error happened" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_ADD.ADD_FAILED,
                payload: "Some unexpected error happened"
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the add map marker failed action when no error message passed', () => {

        // arrange
        const expectedState = {
            isLoading: false,
            error: { message: "No error message specified" },
            markers: []
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_ADD.ADD_FAILED,
                payload: undefined
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });

    it('should handle the add map marker successfull action', () => {

        const apiResult = { id: 'newid12345', title: 'Berlin', lat: 9.9, lng: 10.2 };

        // arrange
        const expectedState = {
            isLoading: false,
            error: null,
            markers: [apiResult]
        };

        // act
        const actualState = mapMarkers(undefined,
            {
                type: actionTypes.MARKERS_ADD.ADD_SUCCEEDED,
                payload: apiResult
            });

        // assert
        expect(actualState).toEqual(expectedState);
    });
});