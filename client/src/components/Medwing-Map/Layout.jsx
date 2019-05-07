import React from "react";
import MedwingGoogleMap from "./Medwing-Google-Map";

const Layout = ({
    center, markers, isGeocodingError, error,
    foundAddress, handleFormSubmit, setSearchInputElementRef
}) =>
    <div className="medwing-map-container">
        <form className="search-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                id="address"
                className="search-input"
                placeholder="Address..."
                ref={setSearchInputElementRef}
                required
            />
            <button type="submit" >
                Search
            </button>
            <button>
                Add 
            </button>
        </form>
        <div className="row">
            <div className="col-sm-12">
                {
                    isGeocodingError ?
                        <p className="bg-danger">{error}</p> :
                        <p className="bg-info">
                            {foundAddress.title}
                        </p>
                }
                <div className="map">
                    <MedwingGoogleMap
                        center={center}
                        markers={markers}
                        isMarkerShown={(markers.length !== 0)}
                    />
                </div>
            </div>
        </div>
    </div>

export default Layout;