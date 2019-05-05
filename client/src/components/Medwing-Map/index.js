import React from "react";
import Geocode from 'react-geocode';
import { settings } from "Constants";
import Layout from "./Layout";

class MedwingMap extends React.Component {

    state = {
        isGeocodingError: false,
        center: settings.DEFAULT_MAP_CENTER_POINT,
        markers: [],
        foundAddress: {}
    }

    componentDidMount() {
        Geocode.setApiKey(settings.MAP_API_KEY);
    }

    _geoFromAddress = (address) => {
        this.setState({ isGeocodingError: false }, async () => {
            try {
                const response = await Geocode.fromAddress(address);
                const { lat, lng } = response.results[0].geometry.location;
                const formattedAddress = response.results[0].formatted_address;
                this._addMarker({ marker: { lat, lng }, formattedAddress });
            } catch (error) {
                // TODO: should have an error logger here
                this.setState({ isGeocodingError: true, error: 'Address not found' });
            }
        });
    }

    _addMarker = ({ marker, formattedAddress }) => {
        const { addMarker } = this.props;
        const foundAddress = { 
            ...marker,
            title: formattedAddress
        };
        this.setState({ center: { ...marker }, foundAddress, markers: [marker] });

        if (this.props.addMarker) {
            addMarker(foundAddress);
        }
    }

    _handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        var address = this.searchInputElement.value;
        this._geoFromAddress(address);
    }

    _setSearchInputElementRef = inputReference => {
        this.searchInputElement = inputReference;
    }

    render() {
        const { center, markers, isGeocodingError, foundAddress, error } = this.state;
        return (
            <Layout
                center={center}
                markers={markers}
                isGeocodingError={isGeocodingError}
                foundAddress={foundAddress}
                handleFormSubmit={this._handleFormSubmit}
                setSearchInputElementRef={this._setSearchInputElementRef}
                error={error}
            />
        );
    }
}

export default MedwingMap;