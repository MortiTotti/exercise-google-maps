import React from "react";
import MarkerInsert from "./marker-insert";
import MarkerUpdate from "./marker-update";

class MarkerView extends React.Component {

    render() {
        const { match: { params } } = this.props;
        return (
            (params.id) ?
                <MarkerUpdate id={params.id} /> :
                <MarkerInsert />
        );
    }
}

export default MarkerView;
