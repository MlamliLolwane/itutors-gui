import Navbar from '../../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import StudentProfileService from '../../../services/student/StudentProfileService'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function ViewStudentProfile() {
    const [isActive, setActive] = React.useState(false);

    return (
        <Formik

            initialValues={{
                student_id: 1,
                first_name: 'Mlamli',
                last_name: 'Lolwane',
                study_level: 'School',
                description: 'Scholar at the Nelson Mandela University.',
            }}>
            <LoadingOverlay
                active={isActive}
                fadeSpeed={100}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: ' rgba(0, 0, 0, 0.9)'
                    })
                }}
                spinner={<HashLoader color="white" size="70px" speedMultiplier="2" />}
            >
                <div>
                    <Navbar />

                    <hr className="my-0 py-0" />
                    <div className="row">
                        <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="col justify-content-md-center px-0 d-flex align-items-center">
                            <div className="col-lg-5 col-11 col-md-8 px-5 py-4 my-md-5 my-lg-0"
                                style={{ backgroundColor: "#141414", borderRadius: "25px", border: "1px solid #ced4da" }}>

                                <h6 className="ps-md-3 pb-2 text-white text-secondary text-left pt-3">
                                    VIEW PROFILE
                                </h6>
                                <div className="mb-0">
                                    <p className="text-white">
                                        This is what tutors see when they look at your profile.
                                </p>
                                </div>

                                <div className="row justify-content-center mb-2">
                                    <div className="col">
                                        <div className="form-floating">
                                            <Field name="first_name" type="text" disabled className="form-control ps-3"
                                                placeholder=" " />
                                            <label htmlFor="first_name" className="text-white">First Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mb-4">
                                    <div className="col">
                                        <div className="form-floating">
                                            <Field className="form-control ps-3" disabled name="last_name"
                                                placeholder=" " type="text" />

                                            <label htmlFor="last_name" className="text-white">Last Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                        <div className="col">
                                        <div className="form-floating">
                                        <label htmlFor="first_name" className="text-white float-label">Study Level</label>
                                        </div>
                                            <br/>
                                            <div className="form-check form-check-inline float-start mt-2 ms-2 ms-md-0">
                                                <Field className="form-check-input" type="radio" name="study_level" value="School" />
                                                <label className="form-check-label fw-light" for="inlineRadio1">School Learner</label>
                                            </div>
                                        </div>
                                    </div>

                                <div className="row justify-content-center mb-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <Field className="form-control ps-3" disabled name="description"
                                                placeholder=" " as="textarea" style={{ height: "100px" }} />

                                            <label htmlFor="description" className="text-white">Short Description of Yourself</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-3" >
                                    <button type="submit"
                                        className="btn btn-primary">UPDATE PROFILE</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
        </Formik>
    );
}

export default ViewStudentProfile;