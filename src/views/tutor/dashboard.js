import Navbar from "../../components/tutor/tutorNavbar"
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'
import React from 'react'

function Dashboard() {
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
            <Navbar />
            <hr className="my-0 py-0" />
            <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="px-0 align-items-center">
                <br />
                <div className="row">
                    <div className="col">
                    <h6 className="ps-md-3 pb-2 text-white text-secondary pt-3">
                        DASHBOARD
                </h6>
                    </div>
                </div>

                <div className="row mt-3 mb-5">
                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body dashboard-card">
                                <p className="card-title text-white"><b>NUMBER OF ADS</b></p>
                                <h5 className="card-text text-white">5</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body dashboard-card">
                                <p className="card-title text-white"><b>REVENUE GENERATED</b></p>
                                <h5 className="card-text text-white">R800,00</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body dashboard-card">
                                <p className="card-title text-white"><b>PENDING REQUESTS</b></p>
                                <h5 className="card-text text-white">2</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-md-3 px-md-4">
                        <div className="card">
                            <div className="card-body dashboard-card">
                                <p className="card-title text-white"><b>UPCOMING SESSIONS</b></p>
                                <h5 className="card-text text-white">1</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7 px-md-4" >
                        <div className="card d-flex" style={{ minHeight: "50vh" }}>
                            <div className="card-body">
                                <p className="card-title d-flex"><b>UPCOMING SESSIONS</b></p>
                                <h5 className="card-text">1</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 px-md-4">
                        <div className="card" style={{ minHeight: "50vh" }}>
                            <div className="card-body">
                                <p className="card-title"><b>UPCOMING SESSIONS</b></p>
                                <h5 className="card-text">1</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    )
}

export default Dashboard;