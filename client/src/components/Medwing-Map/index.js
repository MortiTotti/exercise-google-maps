import React from "react";
import Layout from "./Layout";

class MedwingMap extends React.Component {

    render() {
        const { center, markers } = this.props;
        return (
            <Layout
                center={center}
                markers={markers || []}
            />
        );
    }
}

export default MedwingMap;