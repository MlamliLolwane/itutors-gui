import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TutorProfileService from '../../../services/tutor/TutorProfileService'

function UpdateTutorProfile() {
    const [isActive, setActive] = React.useState(false);
    return (
        <Formik

            initialValues={{
                tutor_id: 1,
                first_name: 'Mlamli',
                last_name: 'Lolwane',
                job_title: 'Software Developer',
                description: 'Founder and CEO at iTutors.',
            }}

            validationSchema={Yup.object({

                first_name: Yup.string().required('First Name Required'),

                last_name: Yup.string().required('Last Name Required'),

                job_title: Yup.string().required('Job Title Required'),

                description: Yup.string(),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);

                    const response = await TutorProfileService.store(values);

                    console.log(response);

                    setActive(false);

                    setSubmitting(false);
                } catch (error) {
                    setActive(false);
                    console.log(error);
                }
            }}

        >
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
                            <div className="col-lg-5 col-11 col-md-8 mx-auto px-5 py-4 my-md-5 my-lg-0"
                                style={{ backgroundColor: "#141414", borderRadius: "25px", border: "1px solid #ced4da" }}>

                                <h6 className="ps-md-3 pb-2 text-white text-secondary text-left pt-3">
                                    UPDATE PROFILE
                                </h6>
                                <div className="mb-0">
                                    <p className="text-white">
                                        Update your profile so that prospective students can ge                             t to know you.
                        </p>
                                </div>

                                {/* Formik Form */}
                                <Form>

                                    <div className="row justify-content-center mb-2">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field name="first_name" type="text" className="form-control ps-3"
                                                    placeholder=" " />

                                                <label htmlFor="first_name" className="text-white">First Name</label>

                                                <ErrorMessage name="first_name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-2">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="last_name"
                                                    placeholder=" " type="text" />

                                                <label htmlFor="last_name" className="text-white">Last Name</label>

                                                <ErrorMessage name="last_name" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row justify-content-center mb-4">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="job_title"
                                                    placeholder=" " type="text" />

                                                <label htmlFor="job_title" className="text-white">Job Title</label>
                                                <ErrorMessage name="job_title" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="description"
                                                    placeholder=" " as="textarea" style={{ height: "100px" }} />

                                                <label htmlFor="description" className="text-white">Short Description of Yourself</label>
                                                <ErrorMessage name="description" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mb-3" >
                                        <button type="submit"
                                            className="btn btn-primary">UPDATE PROFILE</button>
                                    </div>

                                </Form>
                                {/* End of Formik Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
        </Formik>
    );
}

export default UpdateTutorProfile;