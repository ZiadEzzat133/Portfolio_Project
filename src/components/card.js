import React from 'react'
import { MdOutlineComputer } from 'react-icons/md';
import { Tb123 } from "react-icons/tb";
import image from "../components/AI-real.jpg"
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
const card = ({ maintext, description,cardimage }) => {
    const ziad = 'Tb123';
    return (
        <div>
            <BrowserRouter>
            <div className=" ms-3 card text-center mb-3" style={{ width: "18rem" }}>
                <div className="card-body">
                    <img className='mmm' src={cardimage}></img>
                    <h5 className=" mt-3 card-title">{maintext}</h5>
                    <p className="card-text">{description}</p>
                    <div className='icon-border'>
                    </div>  
                    <Link to='#projects' smooth style={{backgroundColor:"rgb(228, 99, 1)"}} className="mt-3 btn btn-secondary">Go to Projects</Link>
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default card
