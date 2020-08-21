  
import React, { Component } from 'react'
import BooksDataService from '../service/BooksDataService';

import LibraryDataService from '../service/LibraryDataService';

class ListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
			libraries: [],
            message: null
        }
      //  this.deleteBookClicked = this.deleteBookClicked.bind(this)
       this.updateBookClicked = this.updateBookClicked.bind(this)
       this.addBookClicked = this.addBookClicked.bind(this)
       this.refreshBooks = this.refreshBooks.bind(this)
    }

    componentDidMount() {
       //this.refreshBooks();
    }

    refreshBooks() {
        BooksDataService.retrieveAllBooks()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ books: response.data })
                }
            )
    }

    deleteBookClicked(id) {
        BooksDataService.deleteBook( id)
            .then(
                response => {
                    this.setState({ message: `Delete of book ${id} Successful` })
                    this.refreshBooks()
                }
            )

    }

    allLibrariesClick() {
        this.refreshLibraries()
	if(document.getElementById("allLibraries").style.display=="none")
		document.getElementById("allLibraries").style.display ="block";
		
		else if(document.getElementById("allLibraries").style.display=="block")
			document.getElementById("allLibraries").style.display ="none";
    }

 allBooksClick() {
        this.refreshBooks()
this.state.message =null
	if(document.getElementById("allBooks").style.display=="none")
		document.getElementById("allBooks").style.display ="block";
		
		else if(document.getElementById("allBooks").style.display=="block")
			document.getElementById("allBooks").style.display ="none";
    }


	refreshLibraries() {
        LibraryDataService.retrieveAllLibraries()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ libraries: response.data })
                }
            )
    }

	addBookClicked() {
        this.props.history.push(`/-1`)
    }

    updateBookClicked(id, bookName, author) {
        debugger;
		console.log('ID ' + id)
		console.log('NAME ' + bookName)
		console.log('AUTHOR ' + author)
		this.setState({actionTaken:'update'})
		
        this.props.history.push(`/${id}/{bookName}/{author}`)
    }

    render() {

        return (
		
            <div className="container">
				<br/>
				
                 
Click on the button to display all libraries      <p/>
        <button  onClick={() => this.allLibrariesClick()}>
          All Libraries
        </button>
    
				<br/>
				<br/>
				<br/>
				
				 <div id = "allLibraries"  className="container" style={{  display :"none" }} >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Library Name</th>
								<th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.libraries.map(
                                    libraries =>
                                        <tr key={libraries.id}>
                                            <td>{libraries.id}</td>
                                            <td>{libraries.name}</td>
											<td>{libraries.address}</td>
                                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
				
<br/>
Click on the button to display all Books
 		<button style={{  display :"block" }}  onClick={() => this.allBooksClick()}>
          All books
        </button>
<br/>
<br/>
                
                <div id = "allBooks"  className="container" style={{  display :"none" }}>
{this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Book Name</th>
								<th>Author</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    books =>
                                        <tr key={books.id}>
                                            <td>{books.id}</td>
                                            <td>{books.bookName}</td>
											<td>{books.author}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateBookClicked(books.id, books.bookName,books.author)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteBookClicked(books.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
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

export default ListComponent