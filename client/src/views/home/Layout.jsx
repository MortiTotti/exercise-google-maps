import React from "react";
import PropTypes from 'prop-types';
import LogoSvg from "Assets/images/logoSvg";
import { MedwingMap, MedwingLoadingIndicator } from "Components";
import MarkersList from "./Markers-List";

const Layout = ({ markers, isLoading, addMarker, editMarker, removeMarker }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="logo">
            <LogoSvg />
        </div>
        <div className="offers-title">
            Find the address
        </div>
        <MedwingMap
            markers={markers}
            addMarker={addMarker}
        />
        <MarkersList
            items={markers}
            editMarker={editMarker}
            removeMarker={removeMarker} />            
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
