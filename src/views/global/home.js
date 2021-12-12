import Navbar from '../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'

function Home() {
    return (
        <LoadingOverlay
            active={false}
            fadeSpeed={100}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: ' rgba(0, 0, 0, 0.9)'
                })
            }}
            spinner={<HashLoader color="white" size="70" speedMultiplier="2" />}
        >
            <div>
                <Navbar />

                <hr className="my-0 py-0" />
                <div className="row">
                    <div style={{ height: "90vh", backgroundColor: "black" }} className="col justify-content-md-center px-0 d-flex align-items-center">
                        <div className="col-md-8 sm-11">
                            <div className="d-flex flex-column align-items-center text-white text-center">
                                <h2 className="align-middle d-inline text-center mb-3 headings">
                                    <span style={{ color: "rgb(83, 199, 83)" }}>Online
            Tutoring Made Easy</span> </h2>

                                <h5 className="px-4 text-white text-center fw-light mb-4 lh-base
                                paragraphs">
                                    iTutors enables you to find, connect and get tutoring online from top tutors nation wide.
                                    Sign Up today to get started.
            </h5>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
}

export default Home;