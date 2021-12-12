import axios from 'axios'

const signup = formData => {
    return axios.post('/signup', formData);
}

const login = formData => {
    return axios.post('/login', formData);
}

const logoff = () => {
    return axios.put('logoff')
}

const emailVerification = formData => {
    return axios.post('/send-verification-link', formData);
}

const passwordReset = formData => {
    return axios.post('/forgot-password', formData);
}

const UserManagementService = {
    signup,
    login,
    logoff,
    emailVerification,
    passwordReset
}

export default UserManagementService;