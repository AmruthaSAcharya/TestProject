import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BooksComponent from './BooksComponent';
import ListComponent from './ListComponent';

class LibraryApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Library Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListComponent} />
                        <Route path="/:id" component={BooksComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default LibraryApp