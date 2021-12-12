import axios from 'axios'

const list_tutoring_requests = formData => {
    return axios.get('/tutoring_request/list', formData);
}

const acceptRequest = formData => {
    return axios.get('/tutoring_request/accept', formData);
}

const rejectRequest = formData => {
    return axios.get('/tutoring_request/reject', formData);
}


const TutorTutoringRequestService = {
    list_tutoring_requests,
    acceptRequest,
    rejectRequest
}

export default TutorTutoringRequestService;