import Axios from "axios";
import { API_URL } from '../../Constants.js'

class AuthendicationService {

    executeBasicAuthenticationService(username, password) {
        console.log(`username:${username}`)
        console.log(`password:${password}`)
        return Axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }


    registerSuccessfulLogin(username, password) {
        console.log("Registered Successfully");
        sessionStorage.setItem('authendicatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    logout() {
        sessionStorage.removeItem('authendicatedUser');
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authendicatedUser')
        console.log("logged in user " + user)
        if (user === null)
            return false
        return true
    }

    setupAxiosInterceptors(token) {
        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authendicatedUser')
        if (user === null)
            return ''
        return user
    }
}

    export default new AuthendicationService()
