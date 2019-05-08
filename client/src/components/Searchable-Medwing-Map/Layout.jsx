import React from "react";
import MedwingMap from "../Medwing-Map";

const Layout = ({ foundedMarkers, center, handleFormSearch, setSearchInputRef }) =>
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
        </form>
        <div className="row">
            <div className="col-sm-12">
                <div className="map">
                    <MedwingMap
                        center={center}
                        markers={foundedMarkers}
                    />
                </div>
            </div>
        </div>
    </div>

export default Layout;