import React from "react";
import { tMapMarker, tBool, tFunc } from 'Types';
import { MedwingMapSearchable, MedwingLoadingIndicator, MedwingButton, MedwingBackButton } from "Components";

const Layout = ({ isLoading, selectedMarker, handleSubmitForm, onAddressSearch }) =>
    <article className="offers-container">
        <MedwingLoadingIndicator isLoading={isLoading} />
        <div className="offers-title">
            {`${selectedMarker ? selectedMarker.title : 'Find the address'}`}
        </div>

        <div className="medwing-map-container">
            <div className="search-form">
                <MedwingButton onClick={handleSubmitForm}>
                    Save
                </MedwingButton>
                <MedwingBackButton />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="map">
                        <MedwingMapSearchable
                            selectedMarkers={selectedMarker ? [selectedMarker] : []}
                            onSearch={onAddressSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    </article>

Layout.propTypes = {
    isLoading: tBool.isRequired,
    selectedMarker: tMapMarker,
    handleSubmitForm: tFunc.isRequired,
    onAddressSearch: tFunc.isRequired
}

export default Layout;
