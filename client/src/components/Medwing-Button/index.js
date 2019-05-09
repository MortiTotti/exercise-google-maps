import React from "react";
import "./style.css";

class MedwingButton extends React.Component {
    render() {
        const { onClick, className, children, ...rest } = this.props;
        return (
            <button onClick={onClick} className={`medwing-button ${className}`} {...rest}>
                {children}
            </button>
        )
    }
}

export default MedwingButton;
