import React from 'react'
import myimage from "../components/realimage-2.jpg"
const about = () => {
    return (
        <div className=' aboutpage' id='about'>
                <h1 className='text-center-z'>About me</h1>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center' >
                    <img className='mypersonalimage' src={myimage}></img>
                    <div className='w-50'>
                        <p className='aboutinfo'>
                            I am Ziad Ezzat Sedki. I am a student in faculty of engineering in cairo university. I study Computer Engineering. I have got GPA of 3.7 and I am a Front End developer. I contrbuted in many project throughout my journey in college. I have got some technical and soft skills.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default about
