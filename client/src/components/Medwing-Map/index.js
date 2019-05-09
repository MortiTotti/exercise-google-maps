import React from "react";
import { tMapMarkers, tMapCenter } from 'Types';
import Layout from "./Layout";

class MedwingMap extends React.Component {

    render() {
        const { center, markers = [] } = this.props;
        return (
            <Layout
                center={center}
                markers={markers}
            />
        );
    }
}

MedwingMap.propTypes = {
    markers: tMapMarkers.isRequired,
    center: tMapCenter
}

export default MedwingMap;