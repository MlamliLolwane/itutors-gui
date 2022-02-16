import axios from 'axios'

const show = (tutor_id) => {
    return axios.get('/tutor/profile/show/' + tutor_id);
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