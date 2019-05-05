import React from "react";
import PropTypes from 'prop-types';
import { Map, MapMarker, LoadingWidget } from "Components";

const Layout = ({ markers, isLoading, addMarker }) => {
    return isLoading ? <LoadingWidget /> :
        <div>
            Map
        </div>
}

Layout.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    addMarker: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default Layout;
