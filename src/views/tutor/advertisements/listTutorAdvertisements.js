import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, {useEffect} from 'react'
import PlaceholderImage from '../../../assets/images/pink.jpg'
import PlaceholderImage2 from '../../../assets/images/Hero-Image.jpg'
import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'
import { Link } from 'react-router-dom'

function ListTutorAdvertisements() {
    const [isActive, setActive] = React.useState(false);

    useEffect(async () => {
        setActive(true);

        const response = await TutorAdvertisementService.list();

        console.log(response);

        setActive(false);
    }, [])
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

                <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="px-0 align-items-center">
                    <br />
                    <div className="row mx-auto">
                        <div className="col-4 offset-md-2">
                            <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                                ALL ADVERTISEMENTS
                            </h6>
                        </div>
                        <div className="col-4">
                            <Link to="/tutor/advertisements/create"
                                className="btn btn-primary">CREATE ADVERTISEMENT</Link>
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
                        <div className="col-6 mx-auto">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={PlaceholderImage2}
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
                </div>
            </div>
        </LoadingOverlay>
    )
}

export default ListTutorAdvertisements;