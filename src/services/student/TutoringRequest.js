import axios from 'axios'

const studentListTutoringRequests = formData => {
    return axios.get('/tutoring_request/list_student_tutoring_request', formData);
}

const createTutoringRequest = formData => {
    return axios.post('/tutoring_request/create', formData);
}

const cancelTutoringRequests = formData => {
    return axios.get('/tutoring_request/cancel', formData);
}


const StudentTutoringRequestService = {
    list_tutoring_requests,
    acceptRequest,
    rejectRequest
}

export default StudentTutoringRequestService;