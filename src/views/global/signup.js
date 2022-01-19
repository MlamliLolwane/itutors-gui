import Navbar from '../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import UserManagementService from '../../services/global/UserManagentService'

function SignUp(props) {
    const [isActive, setActive] = React.useState(false);
    const navigate = useNavigate();
    return (
        <Formik

            initialValues={{
                email: 'mrlolwane96@gmail.com',
                password: 'Mlamli123',
                password_confirmation: 'Mlamli123',
                role: ''
            }}

            validationSchema={Yup.object({

                email: Yup.string().email('Invalid email address').required('Email Address Required'),

                password: Yup.string()

                    .required('Password Required'),

                password_confirmation: Yup.string()
                    .required('Password Confirmation Required')
                    .oneOf([Yup.ref('password'), null], 'Password Confirmation Must Match Password'),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);

                    setSubmitting(true);

                    switch (window.location.pathname) {
                        case "/signup":
                            values.role = 'Student'
                            break;

                        case "/tutor/signup":
                            values.role = 'Tutor'
                            break;

                        case "sysadmin/administrative/users/add/admin":
                            values.role = 'Administrator'
                            break;

                        default:
                            values.role = 'Undefined'
                            break;
                    }

                    await UserManagementService.signup(values);

                    setActive(false);

                    //Redirect to home page of user

                    switch (values.role) {
                        case "Student":
                            navigate('/login');
                            break;

                        case "Tutor":
                            navigate('/tutor/login');
                            break;

                        default: alert('An error occured. Please try again later.');
                    }

                    //console.log(window.location.pathname);

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
                                    SIGN UP</h6>

                                <div className="mb-0">
                                    <p className="text-white">
                                        Welcome to iTutors, a place to learn and share knowledge. Sign Up to get started.
                        </p>
                                </div>

                                {/* Formik Form */}
                                <Form>

                                    <div className="row justify-content-center mb-2">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field name="email" type="email" className="form-control ps-3"
                                                    placeholder=" " />

                                                <label htmlFor="email" className="text-white">Email Address</label>

                                                <ErrorMessage name="email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-2">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="password"
                                                    placeholder=" " type="password" />

                                                <label htmlFor="password" className="text-white">Password</label>

                                                <ErrorMessage name="password" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row justify-content-center mb-3">
                                        <div className="col">
                                            <div className="form-floating">
                                                <Field className="form-control ps-3" name="password_confirmation"
                                                    placeholder=" " type="password" />

                                                <label htmlFor="password_confirmation" className="text-white">Confirm Password</label>
                                                <ErrorMessage name="password_confirmation" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mb-3" >
                                        <button type="submit"
                                            className="btn btn-primary">SIGN UP</button>
                                    </div>

                                </Form>
                                {/* End of Formik Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingOverlay>
        </Formik >
    );
}

export default SignUp;