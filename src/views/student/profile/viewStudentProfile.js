import Navbar from '../../../components/student/studentNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'
// import StudentProfileService from '../../../services/student/StudentProfileService'
import PlaceholderImage2 from '../../../assets/images/Hero-Image.jpg'

function ViewStudentProfile() {
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
                                                University Student
                                            </p>
                                            <p className="card-text mb-0 pb-2">
                                                I am a down to earth, focused student who loves programming.
                                                I attend at the Nelson Mandela University and I am currently on
                                                my 3rd year. My favorite modules include Software Development 3
                                                and Internet Programming 3.
                                            </p>

                                            <p className="card-text"><small className="text-muted">
                                                No ratings yet</small></p>

                                            <div className="text-center mb-3" >
                                                <button type="submit"
                                                    className="btn btn-primary">UPDATE PROFILE</button>
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

export default ViewStudentProfile;