import Navbar from '../../../components/tutor/tutorNavbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React, { useEffect } from 'react'
import PlaceholderImage from '../../../assets/images/pink.jpg'
import PlaceholderImage2 from '../../../assets/images/Hero-Image.jpg'
import TutorAdvertisementService from '../../../services/tutor/TutorAdvertisementService'
import { Link } from 'react-router-dom'

function ListTutorAdvertisements() {
    const [isActive, setActive] = React.useState(false);
    const [tutorAdvertisement, setTutorAdvertisement] = React.useState([]);

    useEffect(() => {
        getTutorAdvertisements();
    }, [])

    async function getTutorAdvertisements() {
        try {
            setActive(true);

            const response = await TutorAdvertisementService.list(1);

            console.log(response.data.length);
            
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

                <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="justify-content-md-center px-0 align-items-center">
                    <br />
                    {/* <div className="row mx-auto">
                        <div className="col-4 offset-md-2">
                            <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                                ALL ADVERTISEMENTS
                            </h6>
                        </div>
                        <div className="col-4">
                            <Link to="/tutor/advertisements/create"
                                className="btn btn-primary">CREATE ADVERTISEMENT</Link>
                        </div>
                    </div> */}

                    {tutorAdvertisement ?
                        tutorAdvertisement.map(advertisement => (
                            <div className="row grid-container" key={advertisement.id}>
                                <div className="col-7 mx-auto mb-4">
                                    <div className="card mb-3 h-100">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={PlaceholderImage}
                                                    className="img-fluid" alt="Advertisement Image" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold text-green pb-1">R {advertisement.price},00</h5>
                                                    <p className="card-text fw-bolder mb-0 pb-2"
                                                        style={{ textTransform: "capitalize" }}>
                                                        {advertisement.title}
                                                    </p>
                                                    <p className="card-text mb-0 pb-2">Duration: {advertisement.duration} Minutes</p>
                                                    <p className="card-text"><small className="text-muted"><Link to="/">
                                                        Biggie Smalls</Link></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )): <h1>
                                No data to display
                            </h1>}

                    {/* <div className="grid-container">
                        <div className="item1">
                            <div className="col-7 mx-auto">
                                <div className="card mb-3 h-100">
                                    <div className="row">
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
                        <div className="item2"><div className="card mb-3 h-100">
                            <div className="col-7 mx-auto">
                                <div className="row">
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
                        </div></div> <br />
                        <div className="item3">3</div>
                    </div> */}

                </div>
            </div>
        </LoadingOverlay>
    )
}

export default ListTutorAdvertisements;