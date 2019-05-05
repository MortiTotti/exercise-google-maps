import React from "react";
import SpinnerSvg from "Assets/animation/spinner-svg";

const matchedStyle = { backgroundColor: "#44C600" }
const notMatchedStyle = { backgroundColor: "#FF4141" }

class MarkerItem extends React.Component {
    _isMounted = false;

    state = {
        isAccepting: false
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _edit = () => {
        const { index, item, acceptOffer } = this.props;
        this.setState({ isAccepting: true },
            () => {
                acceptOffer({ offer: item, index },
                    () => (this._isMounted) ? this.setState({ isAccepting: false }) : null);
            });
    }

    render() {
        const { item } = this.props;
        const { isAccepting } = this.state;

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
                        <span> {item.lng} €</span>
                        <button onClick={this._edit}>
                            {isAccepting ? <SpinnerSvg width={50} height={50} viewBox="0 0 100 115" /> : "Edit"}
                        </button>
                    </div>
                </li>
            </ul>
        );
    }
}

export default MarkerItem;
