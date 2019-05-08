import React from "react";
import GoogleMap from "./vendor/Google-Map";

const Layout = ({ center, markers }) =>
    <div className="medwing-map-container">
        <div className="row">
            <div className="col-sm-12">
                <div className="map">
                    <GoogleMap
                        center={center}
                        markers={markers}
                    />
                </div>
            </div>
        </div>
    </div>

export default Layout;