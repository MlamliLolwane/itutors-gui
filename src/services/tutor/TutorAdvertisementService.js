import axios from 'axios'

const list = () => {
    return axios.get('/tutor/advertisement/list', formData);
}

const show = formData => {
    return axios.get('/tutor/advertisement/show', formData);
}

const store = formData => {
    return axios.post('/tutor/advertisement/create', formData);
}

const update = formData => {
    return axios.put('/tutor/advertisement/update', formData)
}

const destroy = formData => {
    return axios.delete('/tutor/advertisement/delete', formData);
}


const TutorAdvertisementService = {
    list,
    show,
    store,
    update,
    destroy
}

export default TutorAdvertisementService;