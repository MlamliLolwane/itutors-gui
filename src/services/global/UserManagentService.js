import axios from 'axios'

const signup = formData => {
    return axios.post('/signup', formData);
}

const login = async formData => {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return await axios.post('/login', formData);
}

const logoff = () => {
    return axios.post('/logoff')
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