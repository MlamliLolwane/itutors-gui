import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'
import { Link } from 'react-router-dom'

function ListTutorAdvertisements() {
    const [isActive, setActive] = React.useState(false);
    const [tutorAdvertisement, setTutorAdvertisement] = React.useState();

    useEffect(() => {
        getTutorAdvertisements();
    }, [])

    async function getTutorAdvertisements() {
        try {
            setActive(true);

            const response = await TutorAdvertisementService.list(1);

            if (response.data.length > 0)
                setTutorAdvertisement(response.data);

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

                <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="col justify-content-md-center px-0 align-items-center">
                    <br />

                    <div className="row">
                        <div className="col-9 mx-auto">
                            <div className="col-6 d-inline-block">
                                <h6 className="text-white text-secondary">
                                    ALL ADVERTISEMENTS
                            </h6>
                            </div>

                            <div className="col-6 float-end">
                                <Link to="/tutor/advertisements/create">
                                    <FontAwesomeIcon icon="plus-circle"
                                        className="hoverable mr-auto" color="white" size="lg" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <br />

                    {tutorAdvertisement ?
                        tutorAdvertisement.map(advertisement => (
                            <div className="row grid-container" key={advertisement.id}>
                                <div className="col-5 mx-auto mb-4">
                                    <div className="card mb-3 h-100">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold text-green pb-1">R {advertisement.price},00</h5>
                                                    <p className="card-text fw-bolder mb-0 pb-2"
                                                        style={{ textTransform: "capitalize" }}>
                                                        <u>{advertisement.title}</u>
                                                    </p>
                                                    <div className="card-text mb-0 pb-2 max-lines fw-lighter mb-2"
                                                    >
                                                        {advertisement.content}
                                                    </div>
                                                    <p className="card-text mb-0 pb-2 fw-bold">Duration: {advertisement.duration} Minutes</p>
                                                    <p className="card-text"><small className="text-muted"><Link to="/">
                                                        Biggie Smalls</Link></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <div className="row grid-container">
                            <div className="col-5 mx-auto">
                                <div className="card mb-3 h-100">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-green pb-1">No Advertisements Yet</h5>
                                                <div className="card-text mb-0 pb-2 fw-lighter mb-2"
                                                >
                                                    You do not have any advertisements to show at the moment.
                                                    Let us start by creating your first advertisement.
                                            </div>
                                                <div className="text-center" >
                                                    <Link to="/tutor/advertisements/create"
                                                        className="btn btn-primary">CREATE ADVERTISEMENT</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </LoadingOverlay>
    )
}

export default ListTutorAdvertisements;