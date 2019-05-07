import React from "react";
import GoogleMap from "./vendor/Google-Map";

const Layout = ({
    foundedMarker, markers, error,
    handleFormSearch, handleMarkerAdd, setSearchInputRef
}) =>
    <div className="medwing-map-container">
        <form className="search-form" onSubmit={handleFormSearch}>
            <input
                type="text"
                id="address"
                className="search-input"
                placeholder="Address..."
                ref={setSearchInputRef}
                required
            />
            <button type="submit">
                Search
            </button>
            <button onClick={handleMarkerAdd}>
                Add
            </button>
        </form>
        <div className="row">
            <div className="col-sm-12">
                <div className="map">
                    <GoogleMap
                        tempMarker={foundedMarker}
                        markers={markers}
                    />
                </div>
            </div>
        </div>
    </div>

export default Layout;