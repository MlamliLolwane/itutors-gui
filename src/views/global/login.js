import Navbar from '../../components/global/learnerNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import UserManagementService from '../../services/global/UserManagentService'

function Login() {
    const [isActive, setActive] = React.useState(false);
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                email: 'mrlolwane96@gmail.com',
                password: 'Mlamli123',
            }}

            validationSchema={Yup.object({

                email: Yup.string().email('Invalid email address').required('Email Address Required'),

                password: Yup.string()

                    .required('Password Required'),

            })}

            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setActive(true);
                    setSubmitting(true);

                    const response = await UserManagementService.login(values);

                    switch (response.data.role) {
                        case 'Student':
                            setActive(false);
                            setSubmitting(false);
                            navigate('/student/home')
                            break;

                        case 'Tutor':
                            setActive(false);
                            setSubmitting(false);
                            navigate('/tutor/dashboard')
                            break;

                        default:
                            setActive(false);
                            setSubmitting(false);
                            break;
                    }
                } catch (error) {
                    setActive(false);
                    //console.log(error);
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
                                                    <h5 className="card-title fw-bold pb-1">LOGIN</h5>
                                                    <p className="card-text mb-0 pb-2">
                                                        Welcome back to iTutors, we are happy to see you again. Login to access your account.
                                            </p>

                                                    <Form>

                                                        <div className="row justify-content-center mb-4">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field name="email" type="email" className="form-control ps-3"
                                                                        placeholder=" " />

                                                                    <label htmlFor="email">Email Address</label>

                                                                    {/* <ErrorMessage name="email" /> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-center mb-3">
                                                            <div className="col">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="password"
                                                                        placeholder=" " type="password" />

                                                                    <label htmlFor="password">Password</label>

                                                                    {/* <ErrorMessage name="password" /> */}
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="text-center mb-2" >
                                                            <button type="submit"
                                                                className="btn btn-primary">LOGIN</button>
                                                        </div>

                                                        <p className="fw-bold">
                                                            <Link to="/forgot-password" className="nav-link" aria-current="page" style={{color: "#323335"}}><u>
                                                                Forgot Password?
</u></Link>
                                                        </p>

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
    );
}

export default Login;