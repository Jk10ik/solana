import React from "react";
import "./header.css";
import "../../global.css";
// import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

function Header2() {
  return (
    <>
      <header>
        <div className="container1 fixed-top mt-1">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid fw-bold fs-5">
              <a className="navbar-brand text-info" href="#">
                LOGO
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form className="d-flex me-auto" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search NFTs & Collections"
                    aria-label="Search"
                  />
                  {/* <button
                    className="btn btn-outline-success border-left-light"
                    type="submit"
                  >
                    Search
                  </button> */}
                </form>

                <ul className="navbar-nav  mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <a className="nav-link  " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#">
                      NFTs
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#">
                      How It Works?
                    </a>
                  </li>
                  <li>
                    <button className="btn btn-info">Register</button>
                  </li>
                  <li>
                    <button className="btn btn-info  mx-2">
                      Connect Wallet
                    </button>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="nav-link ms-2 text-black d-flex align-middle"
                    >
                      <FiSettings className="fs-4" />
                    
                    </a>
                  </li>  */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header2;
