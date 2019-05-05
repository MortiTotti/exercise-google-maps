import React from "react";
import MarkerItem from "./Marker-Item";

const MarkersList = ({ items, editMarker, removeMarker }) =>
    <React.Fragment>
        <div className="sub-offers-title">
            New Offers
        </div>
        {
            items.map((item, index) =>
                <MarkerItem
                    key={index}
                    index={index}
                    item={item}
                    editMarker={editMarker}
                    removeMarker={removeMarker}
                />
            )
        }
    </React.Fragment>

export default MarkersList;