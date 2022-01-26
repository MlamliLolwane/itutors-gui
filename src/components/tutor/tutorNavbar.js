import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><i>itutors</i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link to="/tutor/dashboard" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/tutor/advertisements/create" className="nav-link">Advertisements</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/tutor/tutoring-requests" className="nav-link" tabIndex="-1" aria-disabled="true">
                                    Tutoring Requests</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                miscellaneous
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">Tutorials</a></li>
                                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="d-inline navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mlamli Lolwane
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/tutor/profile/update' class="dropdown-item">Profile</Link></li>
                                    <li><a class="dropdown-item" href="#">Account Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Sign Out</a></li>
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