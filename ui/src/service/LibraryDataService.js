import axios from 'axios'

const LIBRARY_API_URL = 'http://localhost:8080/lms/library'


class LibraryDataService {

    retrieveAllLibraries() {
        return axios.get(`${LIBRARY_API_URL}`);
    }

    retrieveBooks(id) {
        return axios.get(`${LIBRARY_API_URL}/${id}`);
    }
}

export default new LibraryDataService()