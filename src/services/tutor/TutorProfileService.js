import axios from 'axios'

const show = formData => {
    return axios.get('/tutor/profile/show', formData);
}

const store = formData => {
    return axios.post('/tutor/profile/create', formData);
}

const update = formData => {
    return axios.put('/tutor/profile/update', formData)
}

const destroy = formData => {
    return axios.delete('/tutor/profile/delete', formData);
}


const TutorProfileService = {
    show,
    store,
    update,
    destroy
}

export default TutorProfileService;