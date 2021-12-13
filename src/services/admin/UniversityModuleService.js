import axios from 'axios'

const listUniversityModules = formData => {
    return axios.get('/university_module/show', formData);
}

const createUniversityModule = formData => {
    return axios.get('/university_module/create', formData);
}

const updateUniversityModule = formData => {
    return axios.get('/university_module/update', formData);
}

const deleteUniversityModule = formData => {
    return axios.get('/university_module/delete', formData);
}


const UniversityModuleService = {
    listUniversityModules,
    createUniversityModule,
    updateUniversityModule,
    deleteUniversityModule
}

export default UniversityModuleService;