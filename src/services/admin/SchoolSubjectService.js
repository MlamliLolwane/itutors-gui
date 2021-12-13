import axios from 'axios'

const listSchoolSubjects = formData => {
    return axios.get('/school_subject/index', formData);
}

const createSchoolSubject = formData => {
    return axios.get('/school_subject/create', formData);
}

const updateSchoolSubject = formData => {
    return axios.get('/school_subject/update', formData);
}

const deleteSchoolSubject = formData => {
    return axios.get('/school_subject/delete', formData);
}


const SchoolSubjectService = {
    listSchoolSubjects,
    createSchoolSubject,
    updateSchoolSubject,
    deleteSchoolSubject
}

export default SchoolSubjectService;