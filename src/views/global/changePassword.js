import Navbar from '../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'

function changePassword() {
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
                    <div style={{ minHeight: "100vh", backgroundColor: "black" }} className="col justify-content-md-center px-0 d-flex align-items-center">
                        <div className="col-lg-5 col-11 col-md-8 mx-auto px-5 py-4 my-md-5 my-lg-0"
                            style={{ backgroundColor: "#141414", borderRadius: "25px", border: "1px solid #ced4da" }}>

                            <h6 className="ps-md-3 pb-2 text-white text-secondary text-left pt-3">
                                UPDATE PASSWORD</h6>

                            <div className="mb-0">
                                <p className="text-white">
                                    Regularly updating your password helps keep your account safe.
                        </p>
                            </div>
                            <form className="px-4">
                                <div className="row justify-content-center mb-2">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input className="form-control ps-3" id="password"
                                                placeholder=" " type="password" />
                                            <label htmlFor="role" className="text-white">Current Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mb-2">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input className="form-control ps-3" id="password"
                                                placeholder=" " type="password" />
                                            <label htmlFor="role" className="text-white">New Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mb-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input className="form-control ps-3" id="password_confirmation"
                                                placeholder=" " type="password" />
                                            <label htmlFor="role" className="text-white">Confirm New Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-3" >
                                    <button type="submit"
                                        className="btn btn-primary">UPDATE PASSWORD</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    );
}

export default changePassword;