import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
//import UserManagementService from '../../services/global/UserManagentService'

function CreateTutorSchedule() {
    const [isActive, setActive] = React.useState(false);
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                start_time: '',
                end_time: '',
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
                                                    <h5 className="card-title fw-bold pb-1">UPDATE SCHEDULE</h5>
                                                    <p className="card-text mb-0 pb-2">
                                                        Updating schedule for the following days: <br /><u>Monday, </u>
                                                        <u>Tuesday</u>
                                                    </p>
                                                    <Form>

                                                        <div class="row justify-content-center mb-3">
                                                            <div class="col-4">
                                                                <div className="form-floating">
                                                                    <Field name="start_time" type="time" className="form-control ps-3"
                                                                        placeholder=" " />

                                                                    <label htmlFor="email">Start Time</label>

                                                                    {/* <ErrorMessage name="email" /> */}
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <div className="form-floating">
                                                                    <Field className="form-control ps-3" name="end_time"
                                                                        placeholder=" " type="time" />

                                                                    <label htmlFor="password">End Time</label>

                                                                    {/* <ErrorMessage name="password" /> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="fw-bold">
                                                            <Link to="/forgot-password" className="nav-link" aria-current="page" style={{ color: "#323335" }}><u>
                                                                Add another time slot
                                                            </u></Link>
                                                        </p>

                                                        <div className="text-center mb-2" >
                                                            <button type="submit"
                                                                className="btn btn-primary">UPDATE SCHEDULE</button>
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
    );
}

export default CreateTutorSchedule;