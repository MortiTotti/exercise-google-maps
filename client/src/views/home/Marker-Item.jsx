import React from "react";
import SpinnerSvg from "Assets/animation/spinner-svg";

const matchedStyle = { backgroundColor: "#44C600" }
const notMatchedStyle = { backgroundColor: "#FF4141" }

class MarkerItem extends React.Component {
    _isMounted = false;

    state = {
        isDeleting: false
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _edit = () => {
        const { index, item, editMarker } = this.props;
        if (editMarker)
            editMarker({ marker: item, index });
    }

    _delete = () => {
        const { index, item, removeMarker } = this.props;
        this.setState({ isDeleting: true },
            () => {
                if (removeMarker)
                    removeMarker({ marker: item, index },
                        () => (this._isMounted) ? this.setState({ isDeleting: false }) : null);
            });
    }

    render() {
        const { item } = this.props;
        const { isDeleting } = this.state;

        return (
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="new-query-row">
                    <div className="left-side">
                        <div className="status-sign" style={item.schedule_matches ? matchedStyle : notMatchedStyle}>
                        </div>
                        <div className="offers-details">
                            <span>
                                {item.title}
                            </span>
                            <span>
                                {item.lng}
                            </span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="right-side">
                        <button onClick={this._edit}>
                            Edit
                        </button>
                        <button onClick={this._delete}>
                            {isDeleting ? <SpinnerSvg width={50} height={50} viewBox="0 0 100 115" /> : "Delete"}
                        </button>
                    </div>
                </li>
            </ul>
        );
    }
}

export default MarkerItem;
