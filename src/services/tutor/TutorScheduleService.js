import axios from 'axios'

const list = tutor_id => {
    return axios.get('/tutor/schedule/list/' + tutor_id);
}

// const show = formData => {
//     return axios.get('/tutor/advertisement/show', formData);
// }

const store = formData => {
    return axios.post('/tutor/schedule/create', formData);
}

const update = formData => {
    return axios.put('/tutor/schedule/update', formData)
}

const destroy = formData => {
    return axios.delete('/tutor/schedule/delete', formData);
}


const TutorScheduleService = {
    list,
    store,
    update,
    destroy
}

export default TutorScheduleService;