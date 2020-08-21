import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BookDataService from '../service/BooksDataService';

class BooksComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bookName: this.props.match.params.bookName,
			author: this.props.match.params.author
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        BookDataService.retrieveBook(this.state.id)
            .then(response => this.setState({
                bookName: response.data.bookName,
				author:response.data.author
            }))


    }

    validate(values) {
        let errors = {}
        if (!values.bookName) {
            errors.bookName = 'Enter a book name'
        } else if (values.bookName.length < 5) {
            errors.bookName = 'Enter atleast 5 Characters in book name field'
        }

        return errors

    }

    onSubmit(values) {
        let book = {
            id: this.state.id,
            bookName: values.bookName,
			author: values.author
        }

        if (this.state.id === -1) {
            BookDataService.createBook(book)
                .then(() => this.props.history.push('/'))
        } else {
            BookDataService.updateBook(values.bookName, this.state.id, book)
               .then(() => this.props.history.push('/'))
        }

        console.log(values);
    }

    render() {
        let { bookName, id , author} = this.state
debugger;
        return (
            <div>
                <h3> Book</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id ,bookName, author}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="bookName" component="div"
                                        className="alert alert-warning" />
                                   
                                    <fieldset className="form-group">
                                        <label>Book Name</label>
                                        <Field className="form-control" type="text" name="bookName" />
                                    </fieldset>
 									<fieldset className="form-group">
                                        <label>Author</label>
                                        <Field className="form-control" type="text" name="author" />
                                    </fieldset>
									<table>
									<tr>
									<td> 
                                    <button className="btn " onClick={() => this.props.history.push('/')}>Cancel </button>  </td> 
									<td/>
									<td/>
									<td/>
									<td/><td/>
									<td/><td/>
									<td/><td/>
									<td/><td/>
									<td/><td/>
									<td/>
									<td>
									<button className="btn btn-success" type="submit">Save </button> </td>
									</tr></table>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default BooksComponent