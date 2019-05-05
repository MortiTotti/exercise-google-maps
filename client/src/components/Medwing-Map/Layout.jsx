import React from "react";
import MedwingGoogleMap from "./Medwing-Google-Map";

const Layout = ({
    center, markers, isGeocodingError, error,
    foundAddress, handleFormSubmit, setSearchInputElementRef
}) =>
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <form className="form-inline" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-xs-8 col-sm-10">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="address">Address</label>
                                <input
                                    type="text" className="form-control input-lg" id="address"
                                    placeholder="Berlin, Germany"
                                    ref={setSearchInputElementRef}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-2">
                            <button type="submit" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
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