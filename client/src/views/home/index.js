import React from "react";
import { connect } from "react-redux";
import { getMarkers, addMarker, removeMarker } from "Actions";
import Layout from "./Layout";

class Home extends React.Component {

    state = {
        isLoading: false
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const { getMarkers } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await getMarkers();
            } catch (err) {
                console.log(err);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    _addMarker = (marker) => {
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

    _editMarker = (marker) => {

    }

    _removeMarker = ({ marker }) => {
        const { removeMarker } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await removeMarker(marker.id);
            } catch (err) {
                console.log(err);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    render() {
        const { markers } = this.props;
        const { isLoading } = this.state;

        return (
            <Layout
                markers={markers || []}
                isLoading={isLoading}
                addMarker={this._addMarker}
                editMarker={this._editMarker}
                removeMarker={this._removeMarker}
            />
        );
    }
}

const mapStateToProps = ({ markers }) => ({
    markers: markers.markers
});

export default connect(mapStateToProps, { getMarkers, addMarker, removeMarker })(Home);