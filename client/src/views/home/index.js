import React from "react";
import { connect } from "react-redux";
import { markersList } from "Actions";
import Layout from "./Layout";

class Home extends React.Component {

    _addMarker = () => {

    }

    render() {
        const { markers, isLoading } = this.props;
        return (
            <Layout
                markers={markers}
                isLoading={isLoading}
                addMarker={this._addMarker}
            />
        );
    }
}

const mapStateToProps = ({ markers }) => ({
    markers: markers.markers,
    isLoading: markers.isLoading
});

const mapDispatchToProps = () => ({
    getMarkers: markersList.getMarkers
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);