import React from "react";
import { toast } from 'react-toastify';
import Geocode from 'react-geocode';
import Layout from "./Layout";
import { settings } from "Constants";

class MedwingMap extends React.Component {

    state = {
        isGeocodingError: false
    }

    componentWillReceiveProps(newProps) {
        const { selectedMarker } = newProps;
        if (selectedMarker)
            this.setState({ foundedMarker: selectedMarker });
    }

    componentDidMount() {
        Geocode.setApiKey(settings.MAP_API_KEY);
    }

    _geoFromAddress = async (address) => {
        this.setState({ isGeocodingError: false }, async () => {
            try {
                const response = await Geocode.fromAddress(address);
                const { lat, lng } = response.results[0].geometry.location;
                const formattedAddress = response.results[0].formatted_address;

                const foundedMarker = { title: formattedAddress, lat, lng };
                this.setState({ foundedMarker });
            } catch (error) {
                // TODO: should have an error logger here
                toast.error("Address not found");
                this.setState({ isGeocodingError: true });
            }
        });
    }

    _handleFormSearch = submitEvent => {
        submitEvent.preventDefault();
        var address = this.elSearchInput.value;
        this._geoFromAddress(address);
    }

    _handleMarkerAdd = submitEvent => {
        submitEvent.preventDefault();
        const { addMarker } = this.props;
        const { foundedMarker } = this.state;
        if (!foundedMarker) {
            toast.error("You should search for an address before!!");
            return;
        }
        if (this.props.addMarker) {
            addMarker(foundedMarker);
        }
    }

    _setSearchInputRef = ref => this.elSearchInput = ref;

    render() {
        const { markers } = this.props;
        const { isGeocodingError, foundedMarker, error } = this.state;
        return (
            <Layout
                foundedMarker={foundedMarker}
                markers={markers}
                isGeocodingError={isGeocodingError}
                error={error}
                handleFormSearch={this._handleFormSearch}
                handleMarkerAdd={this._handleMarkerAdd}
                setSearchInputRef={this._setSearchInputRef}
            />
        );
    }
}

export default MedwingMap;