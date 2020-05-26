import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import bookservices from '../api/bookservices';
import authenticationService from './authendicate/AuthendicationService.js'
class BookComponent extends Component {
    constructor(props) {
        super(props)
            this.state = {
            book:{id:this.props.match.params.id},
            id: this.props.match.params.id,
            bookName: '',
            author: '',
            user: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        
        if (this.state.book.id === -1) {
            console.log("Inn -1");
            return
        }
        let username = authenticationService.getLoggedInUserName()

        bookservices.retrieveBook(username, this.state.id)
            .then(
                response => {
                    console.log(`Get book ${response}`);
                    this.setState({
                        id: response.data.id,
                        bookName: response.data.bookName,
                        author: response.data.author,
                        user: response.data.user,
                        retDate: response.data.retDate
                    })
                }
            )
    }
    onSubmit(values) {
        console.log("<-------------------On submit------------------------>")
        let username = authenticationService.getLoggedInUserName()

        let book = {
            id: this.state.id,
            bookName: values.bookName,
            author: values.author,
            user: values.user,
            retDate : new Date()
        }
         
        console.log(this.state.book.id=== 'undefined')

        console.log(this.state.book.id.type === undefined)

        if (this.state.book.id.type === undefined) {
            console.log('inside -1')
            bookservices.createBook(username, book)
                .then(() => this.props.history.push('/bookList'))
        } else {
            console.log('inside -else part')
            bookservices.updateBook(username, this.state.id, book)
                .then(() => this.props.history.push('/bookList'))
        }


    }



    validate(values) {
        let errors = {}
        if (!values.user) {
            errors.user = 'User name should be entered'
        }
        return errors;
    }

    render() {
        let { bookName, author, user } = this.state

        return (
            <div>
                <h1>Book Information</h1>
                <div className="container">
                    <Formik
                        initialValues={{ bookName, author, user }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="user" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Book Name</label>
                                        <Field className="form-control" type="text" name="bookName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Author Name</label>
                                        <Field className="form-control" type="text" name="author" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>User Name</label>
                                        <Field className="form-control" type="text" name="user" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default BookComponent