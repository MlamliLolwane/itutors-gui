import axios from 'axios'

const listSchoolSubjects = formData => {
    return axios.get('/school_subject/index', formData);
}

const SchoolSubjectService = {
    listSchoolSubjects,
}

export default SchoolSubjectService;