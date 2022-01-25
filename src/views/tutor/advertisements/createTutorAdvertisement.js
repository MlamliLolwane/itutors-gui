import Navbar from '../../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'

function CreateTutorAdvertisement() {
    const [isActive, setActive] = React.useState(false);
    return (
        <Formik

            initialValues={{
                title: "One on one C# Tutorial",
                content: 'I will have a one on one session to teach you any topic you want in C#. I have been a C# developer for the past 6 years.',
                price: 200.00,
                duration: 60,
                max_participants: 1,
                tutor_id: 1,
                subject_id: 1
            }}

            validationSchema={Yup.object({

                title: Yup.string().required('Advertisement Title Required'),

                content: Yup.string().required('Advertisement Content Required'),

                price: Yup.number().required('Job Title Required'),

                duration: Yup.number().required('Tutoring Session Duration Required'),

                max_participants: Yup.number().min(1).max(5),

                subject_id: Yup.number().required('Subject You Will Be Tutoring Required'),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);

                    const response = await TutorAdvertisementService.store(values);

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
                                    CREATE ADVERTISEMENT
                                </h6>
                                <div className="mb-0">
                                    <p className="text-white">
                                        Create an advertisement, put it out there and then make money.</p>
                                </div>

                                {/* Formik Form */}
                                <Form>

                                    <div className="row justify-content-center mb-2">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field name="title" type="text" className="form-control ps-3"
                                                    placeholder=" " />

                                                <label htmlFor="title" className="text-white">
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

                                                <label htmlFor="content" className="text-white">
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

                                                <label htmlFor="price" className="text-white">Price</label>

                                                <ErrorMessage name="price" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row justify-content-center mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="duration"
                                                    placeholder=" " type="number" />

                                                <label htmlFor="duration" className="text-white">
                                                    Session Duration (Minutes)</label>
                                                <ErrorMessage name="duration" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="max_participants"
                                                    placeholder=" " type="number" />

                                                <label htmlFor="max_participants" className="text-white">
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
                                {/* End of Formik Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
        </Formik>
    )
}

export default CreateTutorAdvertisement;