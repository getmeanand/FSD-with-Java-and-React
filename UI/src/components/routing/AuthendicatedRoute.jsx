import React, { Component } from "react";
import authendicationService from '../authendicate/AuthendicationService.js'
import { Route, Redirect } from "react-router-dom";

class AuthendicatedRoute extends Component {
    render() {
        if (authendicationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }

    }
}
export default AuthendicatedRoute