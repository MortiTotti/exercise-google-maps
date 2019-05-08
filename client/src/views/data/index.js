import React from "react";
import { connect } from "react-redux";
import { getMarkers, addMarker, removeMarker } from "Actions";
import Layout from "./Layout";

class Data extends React.Component {

    state = {
        isLoading: false
    }

    _handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        var address = this.elSearchInput.value;
        this._geoFromAddress(address);
    }

    render() {
        const { selectedMarker, isLoading } = this.state;
        return (
            <Layout
                selectedMarker={selectedMarker}
                isLoading={isLoading}
                handleFormSubmit={this._handleFormSubmit}
            />
        );
    }
}

export default Data;