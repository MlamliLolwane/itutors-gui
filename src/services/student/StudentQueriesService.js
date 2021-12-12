import axios from 'axios'

const find_tutor = formData => {
    return axios.get('/query/tutor_advertisement', formData);
}


const StudentQueriesService = {
    find_tutor,
}

export default StudentQueriesService;