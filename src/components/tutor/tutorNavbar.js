//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import UserManagementService from '../../services/global/UserManagentService'

function Navbar() {

    const navigate = useNavigate();

    async function signOut(e) {
        e.preventDefault();

        await UserManagementService.logoff();

        navigate('/')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                <Link to="/tutor/dashboard" className="navbar-brand"><i>itutors</i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link to="/tutor/dashboard" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/tutor/advertisements/list" className="nav-link">Advertisements</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/tutor/requests/view" className="nav-link" tabIndex="-1" aria-disabled="true">
                                    Tutoring Requests</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/tutor/schedule/view" className="nav-link" tabIndex="-1" aria-disabled="true">
                                    Schedule</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    miscellaneous
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/" className="dropdown-item" >About Us</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Tutorials</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="d-inline navbar-nav">
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mlamli Lolwane
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/tutor/profile/view" className="dropdown-item">Profile</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Account Settings</Link></li>
                                    <li><button className="dropdown-item" onClick={signOut}>Sign Out</button></li>
                                </ul>
                            </li>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;