import React from 'react'

import logo from './tani.png'

import './components.css'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Navbar on the left */}
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    {/* List on the right */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-3">
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
