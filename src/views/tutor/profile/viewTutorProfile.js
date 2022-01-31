import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
import PlaceholderImage2 from '../../../assets/images/Hero-Image.jpg'
import {Link} from 'react-router-dom'

function ViewTutorProfile() {
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

                <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="px-0 d-flex align-items-center">


                    <div className="row">

                        <div className="col-12">
                            <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                                VIEW PROFILE
                            </h6>
                        </div>


                        <div className="col-6 mx-auto">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={PlaceholderImage2}
                                            className="img-fluid" alt="Advertisement Image" />
                                    </div>
                                    <div className="col-md-8 justify-content-md-center px-0 d-flex align-items-center">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-green pb-1">Mlamli Lolwane</h5>
                                            <p className="card-text fw-bolder mb-0 pb-2"
                                                style={{ textTransform: "capitalize" }}>
                                                Software Developer - Multichoice
                                            </p>
                                            <p className="card-text mb-0 pb-2">
                                                I am a fullstack software developer at Multichoice and
                                                the technologies I mostly deal with are PHP, C# and Python.
                                                The frontend technologies I mostly work with are ReactJS, VueJS
                                                and Flutter. I have been developing software for the past 6 years
                                                and have in depth knowledge about software design patterns and
                                                best practices.
                                            </p>

                                            <p className="card-text"><small className="text-muted">
                                                No ratings yet</small></p>

                                            <div className="text-center mb-3" >
                                                <Link to="/tutor/profile/update"
                                                    className="btn btn-primary">UPDATE PROFILE</Link>
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
    );
}

export default ViewTutorProfile;