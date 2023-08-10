import React from 'react'
import Card from "./card"
import AIimage from "../components/AI-real.jpg"
import MLimage from "../components/ml.jpg"
import design from "../components/design.jpg"
import develop from "../components/develeoperjpg.jpg"
const services = () => {
    return (
        <div className='servicepage' id='services'>
            <h1 className='text-center-z'>My Services</h1>
            <div className='mt-5 cardspart'>
                <Card maintext={'Web Design'} description={'I approach each project individually and always focus on result'} cardimage={design}/>
                <Card maintext={'Web Development'} description={"Your Website will be built with newest technologies"} cardimage={develop} />
                <Card maintext={'Artificial Intilligence'} description={'The newest and latest trend all over the world rigth now'} cardimage={AIimage} />
                <Card maintext={'Machine Learning'} description={'The new methods of Machine Learning will be used'} cardimage={MLimage} />
            </div>

        </div>
    )
}

export default services
