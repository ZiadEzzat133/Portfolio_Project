import React from 'react'

const projectcard = ({image,text,reff}) => {
    return (
        <a style={{ textDecoration: "none"}} href={reff} target="_blank">
            <div className=" ms-4 mt-4 card" style={{ width: "15rem", cursor: "pointer" }}>
                <img src={image} className=" imm card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="fs-5 text-center card-title">{text}</h5>
                    <p className=' lll text-center card-text'>Visit Website</p>
                </div>
            </div>
        </a>
    )
}

export default projectcard
