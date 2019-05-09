import React from "react";
import { connect } from "react-redux";
import { getMarkers, addMarker, removeMarker } from "Actions";
import Layout from "./Layout";

class MarkerView extends React.Component {

    state = {
        isLoading: false
    }

    _handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        var address = this.elSearchInput.value;
        this._geoFromAddress(address);
    }

    _onAddressSearch = (foundedMarker) => {
        if (foundedMarker) {
            this.setState({ selectedMarker: { ...foundedMarker } });
        }
    }

    _onMarkerAdd = (marker) => {
        const { addMarker } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await addMarker(marker);
            } catch (err) {
                console.log(err);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    _onMarkerEdit = (marker) => {
        this.props.history.push('data', { marker });
    }

    render() {
        const { selectedMarker, isLoading } = this.state;
        return (
            <Layout
                isLoading={isLoading}
                selectedMarker={selectedMarker}
                handleFormSubmit={this._handleFormSubmit}
                onAddressSearch={this._onAddressSearch}
            />
        );
    }
}


const mapStateToProps = ({ markers }) => ({
    markers: markers.markers
});

export default connect(mapStateToProps, { getMarkers, addMarker, removeMarker })(MarkerView);
