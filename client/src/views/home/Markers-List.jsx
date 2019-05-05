import React from "react";
import MarkerItem from "./Marker-Item";

const MarkersList = ({ items, acceptOffer }) =>
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
                    acceptOffer={acceptOffer}
                />
            )
        }
    </React.Fragment>

export default MarkersList;