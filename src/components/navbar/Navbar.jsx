import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="data:image/jpeg;base64,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"
                alt="avatar"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              All Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Nusic & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
