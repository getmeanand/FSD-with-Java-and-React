import React, { Component } from 'react';
import AuthendicationService from './authendicate/AuthendicationService.js';


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'anandha',
            password: '',
            hasLoginFailed: false,
            showSuccesssMsg: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    loginClicked() {
        // console.log(this.state)
        AuthendicationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthendicationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
                this.setState({ showSuccesssMsg: true })
                this.setState({ hasLoginFailed: false })
            }).catch(() => {
                this.setState({ showSuccesssMsg: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccesssMsg && <div>Login Successful</div>}
                    User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password :<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}
export default LoginComponent