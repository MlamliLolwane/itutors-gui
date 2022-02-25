import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TutorScheduleService from '../../../services/tutor/TutorScheduleService'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'

function ViewTutorSchedule() {
    const [isActive, setActive] = React.useState(false);
    const [tutorSchedule, setTutorSchedule] = React.useState([]);
    const [scheduleTime, setScheduleTime] = React.useState([]);

    useEffect(() => {
        getTutorSchedule();
    }, []);

    async function getTutorSchedule() {
        setActive(true);
        try {
            const response = await TutorScheduleService.list(1);
            setTutorSchedule(response.data);
            alert(response.data[0].schedule);
            setActive(false);
        } catch (error) {
            setActive(false);
            console.log(error);
        }
    }

    return (
        <Formik
            initialValues={{
                daysOfWeek: [],
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

                    <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="pb-5 px-0 align-items-center">
                        <br />
                        <div className="row">

                            <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="col justify-content-md-center px-0 d-flex align-items-center">
                                <div className="col-lg-6 col-11 col-md-8 mx-auto px-5 py-4 my-md-5 my-lg-0">

                                    <div className="col-12 mx-auto">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-12 justify-content-md-center px-0 d-flex align-items-center">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold pb-1">SCHEDULE</h5>
                                                        <p className="card-text mb-0 pb-2">
                                                            Below is your schedule for the different days of the week.
                                                            Select the days of the week in which you want to update your
                                                            schedule for.
                                                    </p>

                                                        <div>
                                                            <table class="table">
                                                                <tbody>
                                                                    {tutorSchedule ?
                                                                        tutorSchedule.map(schedule => (
                                                                            <tr>
                                                                                <td className="fw-lighter ps-5">{schedule.day_name}</td>
                                                                                {schedule.schedule ?
                                                                                    <td className="fw-lighter px-5">{schedule.schedule}</td>
                                                                                    :
                                                                                    <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                                }
                                                                                <td className="fw-lighter pe-5">
                                                                                    <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                                </td>
                                                                            </tr>
                                                                        )) : null}
                                                                    {/* <tr>
                                                                        <td className="fw-lighter ps-5">Tuesday</td>
                                                                        <td className="fw-lighter px-5">10:00 - 12:00, 18:00 - 22:00</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-lighter ps-5">Wednesday</td>
                                                                        <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-lighter ps-5">Thursday</td>
                                                                        <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-lighter ps-5">Friday</td>
                                                                        <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-lighter ps-5">Saturday</td>
                                                                        <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="fw-lighter ps-5">Sunday</td>
                                                                        <td className="fw-lighter px-5">Schedule not set yet.</td>
                                                                        <td className="fw-lighter pe-5">
                                                                            <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                        </td>
                                                                    </tr> */}
                                                                    {/* <tr>
                                                                        <td className="fw-lighter px-5 mb-0 py-0" colspan="4">
                                                                            <div className="text-center" >
                                                                                <Link to="/tutor/schedule/create"
                                                                                    className="btn btn-primary">UPDATE SCHEDULE</Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr> */}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
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

export default ViewTutorSchedule;