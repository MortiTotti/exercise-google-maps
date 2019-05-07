import React from "react";
import MarkerItem from "./Marker-Item";

const MarkersList = ({ items, onMarkerEdit, onMarkerRemove, onMarkerSelect }) =>
    <div className="makers-list-container">
        <ul>
            {
                items.map((item, index) =>
                    <MarkerItem
                        key={index}
                        index={index}
                        item={item}
                        onMarkerEdit={onMarkerEdit}
                        onMarkerRemove={onMarkerRemove}
                        onMarkerSelect={onMarkerSelect}
                    />
                )
            }
        </ul>
    </div>

export default MarkersList;