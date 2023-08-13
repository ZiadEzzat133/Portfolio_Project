import React from 'react'
import event from "./ev.jpg.png"
const projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1 className='mb-5 text-center-z'>Projects</h1>
            <a style={{textDecoration:"none"}} href='https://www.eventbrite.com/signin/?referrer=%2F' target="_blank">
            <div className="card" style={{ width: "15rem", cursor: "pointer" }}>
                <img src={event} className=" imm card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="fs-5 text-center card-title">Eventbrite Clone</h5>
                    <p className=' lll text-center card-text'>Visit Website</p>
                </div>
            </div>
            </a>

        </div>
    )
}

export default projects
