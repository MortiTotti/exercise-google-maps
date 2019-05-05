import React from "react";
import SpinnerSvg from "Assets/animation/spinner-svg";

const MedwingLoadingIndicator = ({ isLoading }) =>
    <div className="Loading-container" style={{ display: isLoading ? "block" : "none" }}>
        <div className="overlay"></div>
        <div className="loading-contnet">
            <SpinnerSvg />
        </div>
    </div>

export default MedwingLoadingIndicator;