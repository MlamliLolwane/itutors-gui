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
    const [tutorSchedule, setTutorSchedule] = React.useState([]);
    const [schedule, setSchedule] = React.useState([]);

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

                if(daySchedule != "Schedule not set yet")
                {
                    scheduleObject.schedule = daySchedule.substring(0, daySchedule.length -2);
                }
                else{
                    scheduleObject.schedule = daySchedule;
                }
                
                //console.log(scheduleObject)

                //The following line of code only appends the last values  of the object (Sunday)

                tutorNewSchedule.push(JSON.parse(JSON.stringify(scheduleObject)));
                // console.log(tutorNewSchedule);
            })
            setTutorSchedule(tutorNewSchedule);
            setActive(false);
            console.log(tutorNewSchedule);
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
                                                                                    <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                                </td>
                                                                            </tr>
                                                                        )) : null}

                                                                    {/* {tutorSchedule ?
                                                                        tutorSchedule.forEach(schedule => (
                                                                            < tr >
                                                                                <td className="fw-lighter ps-5">{console.log(schedule)}</td>
                                                                                <td className="fw-lighter ps-5"></td>
                                                                                <td className="fw-lighter pe-5">
                                                                                    <FontAwesomeIcon icon="ellipsis-v" className="hoverable" color="grey" />
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                        ) :
                                                                        null} */}
                                                                    {/*
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
        </Formik >
    )
}

export default ViewTutorSchedule;