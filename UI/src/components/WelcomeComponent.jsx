import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Hi Welcome {this.props.match.params.name} . You can manage your books <Link to="/books">here</Link>
                </div>
            </>

        )
    }
}
export default WelcomeComponent