import axios from 'axios'

const BOOK_API_URL = 'http://localhost:8080/lms/books'


class BookDataService {

    retrieveAllBooks() {
        //console.log('executed service')
        return axios.get(`${BOOK_API_URL}`);
    }

    retrieveBook(id) {
        //console.log('executed service')
        return axios.get(`${BOOK_API_URL}/${id}`);
    }

    deleteBook(id) {
        //console.log('executed service')
        return axios.delete(`${BOOK_API_URL}//${id}`);
    }

    updateBook(name,id,book) {
	debugger;
        //console.log('executed service')
        return axios.put(`${BOOK_API_URL}/${name}/${id}`, book);
    }

    createBook(name,author,book) {
        //console.log('executed service')
        return axios.post(`${BOOK_API_URL}/${name}/${author}`, book);
    }
}

export default new BookDataService()