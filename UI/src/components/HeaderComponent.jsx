import React, { Component } from 'react';
import AuthendicationService from './authendicate/AuthendicationService.js';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthendicationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/" className="navbar-brand">In-Anandha's</a></div>
                    <ul className="navbar-nav">

                        {isUserLoggedIn && <li ><Link to="/welcome/ " className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li ><Link to="/bookList" className="nav-link">Books</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li ><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link to="/logout" className="nav-link" onClick={AuthendicationService.logout}>Logout</Link></li>}
                    </ul>

                </nav>
            </header>
        )
    }
}
export default HeaderComponent