import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export function Home() {
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
    <div>
      <div className="card mx-auto" style={{ width: "rem" }}>
        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login />
        </Modal>
        <div className="card-body">
          <Signup to="/Signup">
            <a className="nav-link" aria-current="page" onClick={handleSignupShow}>
              Signup
            </a>
          </Signup>
          <p
            className="card-subtitle mb-2 
          text-muted"
          >
            If you already have an account, click Login!
          </p>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to="/login">
                  <a className="nav-link" aria-current="page" onClick={handleLoginShow}>
                    Login
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                <LogoutLink to="/LogoutLink">
                  <a className="card-link" aria-current="page" onClick={handleLogoutLinkShow}>
                    Logout
                  </a>
                </LogoutLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
