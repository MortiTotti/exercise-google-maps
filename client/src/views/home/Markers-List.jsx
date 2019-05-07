import React from "react";
import MarkerItem from "./Marker-Item";

const MarkersList = ({ items, editItem, deleteItem }) =>
    <div className="makers-list-container">
        <ul>            
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
        </ul>
    </div>

export default MarkersList;