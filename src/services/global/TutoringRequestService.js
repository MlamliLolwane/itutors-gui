import axios from 'axios'

const showTutoringRequest = formData => {
    return axios.get('/tutoring_request/show', formData);
}


const TutoringRequestService = {
    showTutoringRequest,
}

export default TutoringRequestService;