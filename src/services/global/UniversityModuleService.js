import axios from 'axios'

const listUniversityModules = formData => {
    return axios.get('/university_module/show', formData);
}

const UniversityModuleService = {
    listUniversityModules,
}

export default UniversityModuleService;