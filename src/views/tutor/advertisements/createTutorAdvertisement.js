import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'
import {useNavigate} from 'react-router-dom'

function CreateTutorAdvertisement() {
    const [isActive, setActive] = React.useState(false);
    const navigate = useNavigate();
    return (
        <Formik

            initialValues={{
                title: "One on one C# Tutorial",
                content: 'I will have a one on one session to teach you any topic you want in C#. I have been a C# developer for the past 6 years.',
                price: 200.00,
                duration: 60,
                max_participants: 1,
                tutor_id: 1,
                subject_id: "ONT1000"
            }}

            validationSchema={Yup.object({

                title: Yup.string().required('Advertisement Title Required'),

                content: Yup.string().required('Advertisement Content Required'),

                price: Yup.number().required('Job Title Required'),

                duration: Yup.number().required('Tutoring Session Duration Required'),

                max_participants: Yup.number().min(1).max(5),

                subject_id: Yup.string().required('Subject You Will Be Tutoring Required'),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);

                    const response = await TutorAdvertisementService.store(values);

                    setActive(false);

                    setSubmitting(false);

                    navigate('/tutor/advertisements/list')
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
                            <div className="col-lg-5 col-11 col-md-8 mx-auto px-5 py-4 my-md-5 my-lg-0">

                                <div className="col-12 mx-auto">
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-12 justify-content-md-center px-0 d-flex align-items-center">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold pb-1">CREATE ADVERTISEMENT</h5>
                                                    <p className="card-text mb-0 pb-2">
                                                        Create an advertisement, put it out there and make money.
                                            </p>

                                                    <Form>

                                                        <div className="row justify-content-center mb-4">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field name="title" type="text" className="form-control ps-3"
                                                                        placeholder=" " />

                                                                    <label htmlFor="title" >
                                                                        Advertisement Title</label>

                                                                    <ErrorMessage name="title" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center mb-3">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="content"
                                                                        placeholder=" " as="textarea" style={{ height: "100px" }} />

                                                                    <label htmlFor="content" >
                                                                        Advertisement Content</label>
                                                                    <ErrorMessage name="content" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center mb-2">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="price"
                                                                        placeholder=" " type="number" />

                                                                    <label htmlFor="price" >Price</label>

                                                                    <ErrorMessage name="price" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row justify-content-center mb-3">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="duration"
                                                                        placeholder=" " type="number" />

                                                                    <label htmlFor="duration" >
                                                                        Session Duration (Minutes)</label>
                                                                    <ErrorMessage name="duration" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center mb-4">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="max_participants"
                                                                        placeholder=" " type="number" />

                                                                    <label htmlFor="max_participants" >
                                                                        Maximum Participants
            </label>
                                                                    <ErrorMessage name="max_participants" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-center mb-3" >
                                                            <button type="submit"
                                                                className="btn btn-primary">CREATE ADVERTISEMENT</button>
                                                        </div>

                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
        </Formik>
    )
}

export default CreateTutorAdvertisement;