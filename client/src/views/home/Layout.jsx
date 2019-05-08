import React from "react";
import PropTypes from 'prop-types';
import { SearchableMedwingMap, MedwingLoadingIndicator } from "Components";
import MarkersList from "./Markers-List";

const Layout = ({ markers, selectedMarker, isLoading, onMarkerAdd, onMarkerEdit, onMarkerRemove, onMarkerSelect, gotoAddView }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="offers-title">
            Find the address
        </div>
        <button onClick={gotoAddView}>Add</button>
        <div className="map-and-list-layout">
            <SearchableMedwingMap
                markers={markers}
                addMarker={onMarkerAdd}
                selectedMarker={selectedMarker}
            />
            <MarkersList
                items={markers}
                onMarkerEdit={onMarkerEdit}
                onMarkerSelect={onMarkerSelect}
                onMarkerRemove={onMarkerRemove} />
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
    onMarkerAdd: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default Layout;
