import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import PlaceholderImage from '../../../assets/images/pink.jpg'
//import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'
import { Link } from 'react-router-dom'
import ApexCharts from 'apexcharts'

function ViewTutorAdvertisement() {
    const [isActive, setActive] = React.useState(false);

    return (
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
                        <div className="col">
                            <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                                ADVERTISEMENT DETAILS
                            </h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={PlaceholderImage}
                                            className="img-fluid" alt="Advertisement Image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-green pb-1">R 150,00</h5>
                                            <p className="card-text fw-bolder mb-0 pb-2"
                                                style={{ textTransform: "capitalize" }}>
                                                Software development tutorial from an experienced developer
                                            </p>
                                            <p className="card-text mb-0 pb-2">Duration: 1 hour 30 minutes</p>
                                            <p className="card-text"><small className="text-muted"><Link to="/">
                                                Biggie Smalls</Link></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 py-0 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title fw-bolder"><b>ADVERTISEMENT ANALYTICS</b></p>
                                    <div>
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Date Posted</td>
                                                    <td className="fw-bolder ps-5">28 January 2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Total Tutorial Requests</td>
                                                    <td className="fw-bolder ps-5">5</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Completed Tutorials</td>
                                                    <td className="fw-bolder ps-5">3</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Pending Tutorials</td>
                                                    <td className="fw-bolder ps-5">2</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Revenue Generated</td>
                                                    <td className="fw-bolder ps-5">R 750,00</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder ps-5">Overall Tutoring Ratings</td>
                                                    <td className="fw-bolder ps-5">4</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-bolder px-5" colspan="2">
                                                        This advertisement accounts for the total of 43% of your 
                                                        sales/money you have made.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    )
}

export default ViewTutorAdvertisement;