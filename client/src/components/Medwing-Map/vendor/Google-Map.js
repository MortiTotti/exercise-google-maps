import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap as RGoogleMap, Marker } from "react-google-maps";
import { settings } from "Constants";

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${settings.MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const GoogleMap =
    compose(
        withProps({
            googleMapURL,
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )(props => (
        <RGoogleMap
            defaultZoom={12}
            center={props.tempMarker || settings.DEFAULT_MAP_CENTER_POINT}>
            {   // show the temporary marker with a different style (founded marker by user search)
                props.tempMarker &&
                <Marker
                    icon={{
                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        strokeColor: "green",
                        strokeWeight: 4,
                        scale: 7
                    }}
                    position={{ ...props.tempMarker }}
                />
            }
            {
                props.markers.map((marker, index) =>
                    <Marker
                        key={index}
                        position={{ ...marker }}
                    />
                )
            }
        </RGoogleMap>
    ));

export default GoogleMap;