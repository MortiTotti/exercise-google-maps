import React from "react";
import { settings } from "Constants";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MedwingGoogleMap =
    compose(
        withProps({
            googleMapURL:
                `https://maps.googleapis.com/maps/api/js?key=${settings.MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )(props => (
        <GoogleMap
            defaultZoom={12}
            center={props.center}>
            {
                props.isMarkerShown && (
                    props.markers.map((marker, index) =>
                        <Marker
                            key={index}
                            position={{ ...marker }}
                        />
                    ))
            }
        </GoogleMap>
    ));

export default MedwingGoogleMap;