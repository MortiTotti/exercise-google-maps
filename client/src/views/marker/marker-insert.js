import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toast } from 'react-toastify';
import { tFunc } from 'Types';
import { ServiceErrorHandler } from "Helpers";
import { addMarker } from "Actions";
import Layout from "./Layout";

class MarkerViewInsert extends React.Component {

    state = {
        isLoading: false
    }

    _onAddressSearch = (foundedMarker) => {
        if (foundedMarker) {
            this.setState({ selectedMarker: { ...foundedMarker } });
        }
    }

    _isFormValid = (selectedMarker) => {
        if (!selectedMarker) {
            toast.error("You must search an address before");
            return false;
        }
        return true;
    }

    _handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();

        const { selectedMarker } = this.state;
        if (!this._isFormValid(selectedMarker)) return;

        const { history, addMarker } = this.props;
        this.setState({ isLoading: true }, async () => {
            try {
                await addMarker(selectedMarker);
                history.goBack();
            } catch (error) {
                ServiceErrorHandler.error(error);
                toast.error(error.message);
            } finally {
                this.setState({ isLoading: false });
            }
        });
    }

    render() {
        const { selectedMarker, isLoading } = this.state;
        return (
            <Layout
                isLoading={isLoading}
                selectedMarker={selectedMarker}
                handleSubmitForm={this._handleFormSubmit}
                onAddressSearch={this._onAddressSearch}
            />
        );
    }
}

MarkerViewInsert.propTypes = {
    addMarker: tFunc.isRequired
}

export default connect(undefined, { addMarker })(withRouter(MarkerViewInsert));
