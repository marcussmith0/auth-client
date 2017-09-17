import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import * as actions from '../../actions';

class SignIn extends Component {

    handleFormSubmit({ email, password }) {
        console.log(email, password);
        this.props.signInUser({ email, password});
    }

    renderError() {
		console.log(this.props.errorMessage);
        if(this.props.errorMessage) {
            <div className="alert alert-danger">
                <strong>Oops!</strong> {this.props.errorMessage}
            </div>
        }
	}

    render() {
        const { handleSubmit, fields: { password, email }} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label> Email: </label>
                    <input {...email} className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label> Password: </label>
                    <input {...password} type="password" className="form-control"/>
                </fieldset>
                {this.renderError()}
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(SignIn);