import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

export const Navbar = () => {



  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li><a className="nav-link fw-bold" href="/">Abstract</a></li>
            <div class="vr"></div>
            
            <li><a className="nav-link" href="/service">Help Center</a></li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service">Service</a>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-secondary">Submit a Request</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};