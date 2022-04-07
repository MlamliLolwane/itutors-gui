import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TutorScheduleService from '../../../services/tutor/TutorScheduleService'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { parse } from '@fortawesome/fontawesome-svg-core'

function ViewTutorSchedule() {
    const [isActive, setActive] = React.useState(false);
    const [tutorSchedule, setTutorSchedule] = React.useState();
    const [schedule, setSchedule] = React.useState([]);
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    useEffect(() => {
        getTutorSchedule();
    }, []);

    async function getTutorSchedule() {
        setActive(true);
        try {
            let scheduleObject = {};
            let tutorNewSchedule = [];
            const response = await TutorScheduleService.list(1);

            response.data.map(data => {

                let daySchedule = "";
                scheduleObject.day_name = data.day_name;
                //<td className="fw-lighter ps-5">{schedule.day_name}</td>

                if (data.schedule) {
                    let daily_schedule = JSON.parse(data.schedule);

                    daily_schedule.map(schedule => {
                        daySchedule +=
                            schedule.start_time + " - " + schedule.end_time + ", ";
                    })
                }
                else {
                    daySchedule = "Schedule not set yet";
                }

                if (daySchedule != "Schedule not set yet") {
                    scheduleObject.schedule = daySchedule.substring(0, daySchedule.length - 2);
                }
                else {
                    scheduleObject.schedule = daySchedule;
                }

                tutorNewSchedule.push(JSON.parse(JSON.stringify(scheduleObject)));
            })
            if (response.data.length > 0)
                setTutorSchedule(tutorNewSchedule);

            setActive(false);
        }
        catch (err) {
            console.error();
            setActive(false);
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
                                                            You can customize your schedule however you like.
                                                    </p>
                                                        <div>
                                                            <table className="table">
                                                                <tbody>
                                                                    {tutorSchedule ?
                                                                        tutorSchedule.map((schedule) => (
                                                                            <tr>
                                                                                <td className="fw-lighter ps-5">{schedule.day_name}</td>

                                                                                <td className="fw-lighter ps-5">{schedule.schedule}</td>

                                                                                <td className="fw-lighter pe-5">
                                                                                <li style={{listStyleType: "none"}}>
                                                                                        <button id="navbarDropdown" type="button" className="transparent-button" 
                                                                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                                        </button>
                                                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                                            <li><Link to="/tutor/schedule/update" className="dropdown-item" >Update Schedule</Link></li>
                                                                                            <li><Link to="/tutor/schedule/delete" className="dropdown-item" >Delete Schedule</Link></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </td>
                                                                            </tr>
                                                                        )) :
                                                                        daysOfWeek.map((day, index) => (
                                                                            <tr>
                                                                                <td className="fw-lighter ps-5">{day}</td>

                                                                                <td className="fw-lighter ps-5">Schedule Not Set Yet</td>

                                                                                <td className="fw-lighter pe-5">
                                                                                    <li style={{listStyleType: "none"}}>
                                                                                        <button id="navbarDropdown" type="button" className="transparent-button" 
                                                                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                                        </button>
                                                                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                                            <li><Link to={`/tutor/schedule/create/${index + 1}`} className="dropdown-item" >
                                                                                                Create Schedule</Link></li>
                                                                                        </ul>
                                                                                    </li>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }


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
        </Formik >
    )
}

export default ViewTutorSchedule;