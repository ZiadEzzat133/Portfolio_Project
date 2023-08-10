import React from 'react'
import Typed from "react-typed"
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
const header = () => {
    return (
        <div className='header-wrapper' id='home'>
            <BrowserRouter>
            <div className='mainInfo'>
                <h1>Hi! I am Ziad Elsamadony and this what I can do</h1>
                <Typed className='typed-text' loop typeSpeed={30} backSpeed={40} strings={["Web Design","Web Development","Machine Learning","Hardware Design"]} />
                <Link to='#contact' smooth className=" btn-offer">Contact me</Link>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default header