import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const [isLogoutLinkVisible, setIsLogoutLinkVisible] = useState(false);

  const handleLogoutLinkShow = () => {
    setIsLogoutLinkVisible(true);
  };

  const handleLogoutLinkClose = () => {
    setIsLogoutLinkVisible(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <Modal show={isLoginVisible} onClose={handleLoginClose}>
        <Login />
      </Modal>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Plant Care App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="dropdown-item">
                    <a className="nav-link" aria-current="page" onClick={handleLoginShow}>
                      Login
                    </a>
                  </Link>
                </li>
                <li>
                  <LogoutLink to="/LogoutLink" className="dropdown-item">
                    <a className="nav-link" aria-current="page" onClick={handleLogoutLinkShow}>
                      Logout
                    </a>
                  </LogoutLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/signup" className="dropdown-item">
                    <a className="nav-link" aria-current="page" onClick={handleSignupShow}>
                      Signup
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Garden
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/plants" className="dropdown-item">
                    All Plants
                  </Link>
                </li>
                <li>
                  <Link to="/schedules" className="dropdown-item">
                    My Schedules
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/schedulesnew" className="dropdown-item">
                    New Schedule
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
