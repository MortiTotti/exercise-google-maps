import React from "react";
import PropTypes from 'prop-types';
import { MedwingMap, MedwingLoadingIndicator } from "Components";
import MarkersList from "./Markers-List";

const Layout = ({ markers, isLoading, editMarker, removeMarker }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />        
        <div className="offers-title">
            Find the address
        </div>
        <div className="map-and-list-layout">
            <MedwingMap
                markers={markers}
            />
            <MarkersList
                items={markers}
                editMarker={editMarker}
                removeMarker={removeMarker} />
        </div>
    </article>

Layout.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    addMarker: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default Layout;
