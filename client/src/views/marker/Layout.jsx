import React from "react";
import { tMapMarkers, tMapMarker, tBool, tFunc } from 'Types';
import { MedwingMapSearchable, MedwingLoadingIndicator } from "Components";

const Layout = ({ isLoading, selectedMarker, handleFormSearch, onBackClick, onAddressSearch }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="offers-title">
            Find the address
        </div>

        <div className="medwing-map-container">
            <form className="search-form" onSubmit={handleFormSearch}>
                <button type="submit">
                    Add
                </button>
                <button onClick={onBackClick}>
                    Back
                </button>
            </form>
            <div className="row">
                <div className="col-sm-12">
                    <div className="map">
                        <MedwingMapSearchable
                            selectedMarkers={[selectedMarker]}
                            onSearch={onAddressSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    </article>
/*
    <article className="offers-container">
        <form onSubmit={handleFormSubmit}>
            <MedwingLoadingIndicator isLoading={isLoading} />
            <div className="offers-title">
                Find the address
            </div>
            <div className="map-and-list-layout">
                <MedwingMap
                    markers={selectedMarker}
                    selectedMarker={selectedMarker}
                />
            </div>
        </form>
    </article>

Layout.propTypes = {
    onMarkerAdd: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}*/

export default Layout;
