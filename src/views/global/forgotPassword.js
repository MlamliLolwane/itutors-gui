import Navbar from '../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import UserManagementService from '../../services/global/UserManagentService'

function ForgotPassword() {
    const [isActive, setActive] = React.useState(false);
    return (
        <Formik
            initialValues={{
                email: 'mrlolwane96@gmail.com',
                password: 'Mlamli123',
            }}

            validationSchema={Yup.object({

                email: Yup.string().email('Invalid email address').required('Email Address Required'),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);

                    const response = await UserManagementService.passwordReset(values);

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
                                RECOVER ACCOUNT</h6>

                                <div className="mb-0">
                                    <p className="text-white">
                                    Forgot your password? Enter the email address you used to sign up and we will help you recover your account.
                        </p>
                                </div>

                                {/* Formik Form */}
                                <Form>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field name="email" type="email" className="form-control ps-3"
                                                    placeholder=" " />

                                                <label htmlFor="email" className="text-white">Email Address</label>

                                                <ErrorMessage name="email" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text-center mb-3" >
                                        <button type="submit"
                                            className="btn btn-primary">RECOVER ACCOUNT</button>
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

export default ForgotPassword;