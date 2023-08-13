import React from 'react'
import event from "./ev.jpg.png"
import Projectcard from './projectcard'
import customer from './cust.png'
import port from './portfolio.png'
const projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1 className='mb-5 text-center-z'>Projects</h1>
            <div className=' projectscards d-flex'>
                <Projectcard text = {"Eventbrite Clone"} image ={event} reff={'https://www.eventbrite.com/signin/?referrer=%2F'} />
                <Projectcard text ={"Portfolio Project"} image ={port} reff={'#'} />
                <Projectcard text ={"Customers Handler"} image ={customer} reff={'file:///D:/EPS%20Training%20Frontend/Bootstrap_Project/First%20Bootstrap%20Project/index.html'} />
            </div>


        </div>
    )
}

export default projects
