import axios from 'axios'

const show = formData => {
    return axios.get('/student/profile/show', formData);
}

const store = formData => {
    return axios.post('/student/profile/create', formData);
}

const update = formData => {
    return axios.put('/student/profile/update', formData)
}

const destroy = formData => {
    return axios.delete('/student/profile/delete', formData);
}


const StudentProfileService = {
    show,
    store,
    update,
    destroy
}

export default StudentProfileService;