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
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/about" className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">For Tutors</Link>
                            </li>

                            <li className="d-inline mx-md-3 nav-item">
                                <Link to="/" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Search <FontAwesomeIcon icon="search" color="grey" />
                                </Link>
                            </li>
                        </ul>
                        <div className="d-inline navbar-nav">
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mlamli Lolwane
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/tutor/profile/update" className="dropdown-item">Profile</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Account Settings</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Sign Out</Link></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;