import React, { Component } from "react";
import authenticationService from './authendicate/AuthendicationService.js'
import bookservices from '../api/bookservices.js'
import moment from 'moment'
class BookListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: []
        }
        this.refreshBooks = this.refreshBooks.bind(this)
        this.addBookClicked = this.addBookClicked.bind(this)
        this.updateBook=this.updateBook.bind(this)
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.refreshBooks();
        console.log(this.state)
    }

    refreshBooks() {
        let username = authenticationService.getLoggedInUserName()
         bookservices.retrieveAllBooks(username)
             .then(
                 response => {
                     console.log(response);
                     this.setState({ bookList: response.data })
                 }
             )
    }
    addBookClicked(){
        this.props.history.push(`/book/-1`)
    }

    updateBook(id) {
        console.log('update ' + id)
        this.props.history.push(`/book/${id}`)
    }
    render() {
        return (
            <div>
                <h1>Book List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Book No</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Hold By</th>
                                <th>Return On</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookList.map(book =>
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.bookName}</td>
                                        <td>{book.author}</td>
                                        <td>{book.user}</td>
                                        <td>{moment(book.retDate).format('DD-MM-YYYY')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateBook(book.id)} >Assign</button></td>
                                    </tr>
                                )}
                        </tbody>

                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addBookClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookListComponent