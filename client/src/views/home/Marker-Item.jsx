import React from "react";
import SpinnerSvg from "Assets/animation/spinner-svg";

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
        const { index, item, onMarkerEdit } = this.props;
        if (onMarkerEdit)
            onMarkerEdit({ marker: item, index });
    }

    _delete = () => {
        const { index, item, onMarkerRemove } = this.props;
        if (!onMarkerRemove) return;
        this.setState({ isDeleting: true },
            () => {
                onMarkerRemove({ marker: item, index },
                    () => (this._isMounted) ? this.setState({ isDeleting: false }) : null);
            });
    }

    _select = () => {
        const { item, onMarkerSelect } = this.props;
        if (onMarkerSelect)
            onMarkerSelect(item);
    }

    render() {
        const { item } = this.props;
        const { isDeleting } = this.state;

        return (
            <div>
                <li className="card">
                    <div className="card-content">
                        <div onClick={this._select} className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.title}</div>
                        <div className="sub-content">Latitude: {item.lng}</div>
                        <div className="sub-content">Longitude: {item.lng}</div>
                    </div>
                    <div className="card-footer">
                        <button className="edit-btn" onClick={this._edit}>
                            Edit
                            </button>
                        <button className="delete-btn" onClick={this._delete}>
                            {isDeleting ? <SpinnerSvg width={50} height={50} viewBox="0 0 100 115" /> : "Delete"}
                        </button>
                    </div>
                </li>
            </div>
        );
    }
}

export default MarkerItem;
