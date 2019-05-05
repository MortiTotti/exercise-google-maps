import React from "react";
import MarkerItem from "./Marker-Item";

const MarkersList = ({ items, editItem, deleteItem }) =>
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
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            )
        }
    </React.Fragment>

export default MarkersList;