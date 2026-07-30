import { useState } from "react";
import AuthModal from "./Authmodal";
export default function Nav() {
  return (
    <>
    <div className="nav w-100 bg-dark shadow-lg">
        <div className="bg-warning w-100" style={{height:'12px'}} >
            <p className="text-center" style={{fontSize: "10px"}}>WELCOME TO TECHWALK</p>
        </div>
      <nav className="navbar navbar-expand-lg justify-content-between align-items-center nav-wrapper w-100 py-3 px-3">
        <button
          type="button"
          className="navbar-toggler bg-white ms-2"
          data-bs-target="#navbar"
          data-bs-toggle="collapse"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#" className="navbar-brand mx-auto order-0 d-flex d-lg-none">
          <h2 className="fw-bold display-6 text-warning mb-0">TECHWALK</h2>
        </a>

        <ul className="d-lg-none d-flex align-items-center gap-3 list-unstyled mb-0 ms-auto me-2">
          <li className="nav-item">
            <a href="#" data-bs-toggle="modal" data-bs-target="#searchmodal">
              <i className="fa-solid fa-magnifying-glass text-white fs-5"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" data-bs-toggle="modal" data-bs-target="#signupmodal">
              <i className="fa-solid fa-user-plus text-white fs-5"></i>
            </a>
          </li>
          <li className="nav-item position-relative">
            <a href="#">
              <i className="fa-solid fa-heart text-white fs-5"></i>
              <span className="position-absolute badge bg-warning top-0 start-100 translate-middle rounded-pill">
                0
              </span>
            </a>
          </li>
          <li className="nav-item position-relative me-2">
            <a href="#">
              <i className="fa-solid fa-bag-shopping text-white fs-5"></i>
              <span className="position-absolute badge bg-warning top-0 start-100 translate-middle rounded-pill">
                0
              </span>
            </a>
          </li>
        </ul>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbar"
        >
          <ul className="navbar-nav nav-menu align-items-center gap-4">
            <li className="nav-item">
              <a href="#" className="nav-link text-white ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white ">
                First-Hand
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white ">
                Second-Hand
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white ">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Contact
              </a>
            </li>
            <a href="" className="navbar-brand order-0 d-none d-lg-flex">
              <h2 className="fw-bold display-6 text-warning ms-5">TECHWALK</h2>
            </a>
          </ul>
          <ul className="d-none d-lg-flex align-items-center gap-3 list-unstyled mb-0 ms-auto me-5">
            <li className="nav-item me-4">
              <div className="input-group">
                <div className="border ">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#searchmodal"
                  >
                    <i className="fa-solid fa-magnifying-glass text-white fs-5 p-2"></i>
                  </a>
                </div>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search.."
                />
              </div>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupmodal">
                <i className="fa-solid fa-user-plus text-white fs-5 me-2"></i>
              </a>
            </li>
            <li className="nav-item position-relative me-4">
              <a href="#">
                <i className="fa-solid fa-heart text-white fs-5 me-2"></i>
                <span className="position-absolute badge bg-warning top-0 start-100 translate-middle rounded-pill">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item position-relative me-4">
              <a href="#">
                <i className="fa-solid fa-bag-shopping text-white fs-5"></i>
                <span className="position-absolute badge bg-warning top-0 start-100 translate-middle rounded-pill">
                  0
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <AuthModal/>
    </>
  );
}
