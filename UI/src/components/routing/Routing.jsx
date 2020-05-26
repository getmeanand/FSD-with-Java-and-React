import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthendicatedRoute from './AuthendicatedRoute.jsx'
import LoginComponent from '../LoginComponent.jsx'
import WelcomeComponent from '../WelcomeComponent.jsx'
import HeaderComponent from '../HeaderComponent.jsx'
import FooterComponent from '../FooterComponent'
import ErrorComponent from '../ErrorComponent'
import BookListComponent from '../BookListComponent.jsx'
import BookComponent from '../BookComponent.jsx';
class Routing extends Component {
    render() {
        return (
            <div className="Routing">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthendicatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthendicatedRoute path="/book/:id" component={BookComponent}/>
                            <Route path="/logout" component={LogoutComponent} />
                            <Route path="/bookList" component={BookListComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}
class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
               </div>
            </div>
        )
    }
}

export default Routing