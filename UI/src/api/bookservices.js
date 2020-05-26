import axios from 'axios'
import { API_URL } from '../Constants.js'
class bookservices {
    retrieveAllBooks(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${name}/books`);
    }
    retrieveBook(name, id) {
        return axios.get(`${API_URL}/users/${name}/books/${id}`);
    }
    updateBook(name, id, book) {
        console.log('updateBook service')
        return axios.put(`${API_URL}/users/${name}/books/${id}`, book);
    }
    createBook(name, book) {
        console.log('createBook service')
        return axios.post(`${API_URL}/users/${name}/books`, book);
    }
}
export default new bookservices()