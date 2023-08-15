import React from 'react'
import "../App.css"
import logo from "./LOGO-2-updated.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
const navbar = () => {
    return (
        <BrowserRouter>
            <nav style={{ position: 'fixed', zIndex: '2', width: '100%' }} className=" navbar navbar-expand-lg bg-dark">
                <div className='container fluid'>

                    <a className="navbar-brand" href="/"><img className='mylogo' src={logo} alt='logo..'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='#home' smooth className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#about' smooth className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#services' smooth className="nav-link">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#experience' smooth className="nav-link">Experiences</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#projects' smooth className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#contact' smooth className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default navbar
