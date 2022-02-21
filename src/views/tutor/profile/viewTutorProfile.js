import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import PlaceholderImage2 from '../../../assets/images/Hero-Image.jpg'
import { Link } from 'react-router-dom'
import TutorProfileService from '../../../services/tutor/TutorProfileService'

function ViewTutorProfile() {
    const [isActive, setActive] = React.useState(false);
    const [tutorProfile, setTutorProfile] = React.useState("");

    useEffect(() => {
        GetTutorProfile();
    }, []);

    async function GetTutorProfile() {
        setActive(true);
        try {
            const response = await TutorProfileService.show(1);
            setTutorProfile(response.data);
            console.log(response.data);
            setActive(false);
        } catch (error) {
            setActive(false);
            console.log(error);
        }
    }

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


                                    {tutorProfile ?
                                        <div className="col-md-8 justify-content-md-center px-0 d-flex align-items-center">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-green pb-1">{tutorProfile.first_name} {tutorProfile.last_name}</h5>
                                                <p className="card-text fw-bolder mb-0 pb-2"
                                                    style={{ textTransform: "capitalize" }}>
                                                    {tutorProfile.job_title}
                                                </p>
                                                <p className="card-text mb-0 pb-2">
                                                    {tutorProfile.description}
                                                </p>

                                                <p className="card-text"><small className="text-muted">
                                                    No ratings yet</small></p>

                                                <div className="text-center mb-3" >
                                                    <Link to="/tutor/profile/update"
                                                        className="btn btn-primary">UPDATE PROFILE</Link>
                                                </div>
                                            </div>
                                        </div>

                                        : <h3>No data yet</h3>}
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