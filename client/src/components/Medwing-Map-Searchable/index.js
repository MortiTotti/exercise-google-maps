import React from "react";
import { toast } from 'react-toastify';
import Geocode from 'react-geocode';
import Layout from "./Layout";
import { settings } from "Constants";

class MedwingMapSearchable extends React.Component {

    state = {};

    componentWillReceiveProps(newProps) {
        const { selectedMarkers } = newProps;
        if (selectedMarkers)
            this.setState({ foundedMarkers: selectedMarkers });
    }

    componentDidMount() {
        Geocode.setApiKey(settings.MAP_API_KEY);
    }

    _geoFromAddress = async (address) => {
        const { onSearch } = this.props;
        try {
            const response = await Geocode.fromAddress(address);
            const { lat, lng } = response.results[0].geometry.location;
            const formattedAddress = response.results[0].formatted_address;

            const foundedMarker = { title: formattedAddress, lat, lng };
            this.setState({ foundedMarkers: [foundedMarker] });
            if (onSearch) {
                onSearch(foundedMarker);
            }
        } catch (error) {
            // TODO: should have an error logger here
            toast.error("Address not found");
        }
    }

    _handleFormSearch = submitEvent => {
        submitEvent.preventDefault();
        var address = this.elSearchInput.value;
        this._geoFromAddress(address);        
    }

    _setSearchInputRef = ref => this.elSearchInput = ref;

    render() {
        const { foundedMarkers } = this.state;
        const center = (foundedMarkers && (foundedMarkers.length !== 0)) ? foundedMarkers[0] : undefined;
        return (
            <Layout
                center={center}
                foundedMarkers={foundedMarkers || []}
                handleFormSearch={this._handleFormSearch}
                setSearchInputRef={this._setSearchInputRef}
            />
        );
    }
}

export default MedwingMapSearchable;