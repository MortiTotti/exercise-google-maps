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

    _onMarkerSelect = (selectedMarker) => {
        this.setState({ selectedMarker });
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

    }

    _gotoAddView = () => {
        this.props.history.push('data');
    }

    _onMarkerRemove = ({ marker }) => {
        const { removeMarker } = this.props;
        if (!removeMarker) return;
        
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
        const { selectedMarker, isLoading } = this.state;

        return (
            <Layout
                markers={markers || []}
                selectedMarker={selectedMarker}
                isLoading={isLoading}
                gotoAddView={this._gotoAddView}
                onMarkerAdd={this._onMarkerAdd}
                onMarkerEdit={this._onMarkerEdit}
                onMarkerRemove={this._onMarkerRemove}
                onMarkerSelect={this._onMarkerSelect}
            />
        );
    }
}

const mapStateToProps = ({ markers }) => ({
    markers: markers.markers
});

export default connect(mapStateToProps, { getMarkers, addMarker, removeMarker })(Home);