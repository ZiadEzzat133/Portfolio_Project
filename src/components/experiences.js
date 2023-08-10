import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BiSolidSchool } from 'react-icons/bi'
import { MdSchool } from 'react-icons/md'
const experiences = () => {
    return (
        <div className='experience' id='experience'>
            <h1 className='text-center-z'>Experiences</h1>
            <VerticalTimeline className='mt-5' lineColor='#000'>
                <VerticalTimelineElement date='2007-2019' className='vertical-timeline-element--education' icon={<BiSolidSchool />} iconStyle={{ background: '#000', color: '#fff' }}>
                    <h4>Hassan Abo Bakr Language School</h4>
                    <p>Graduated by 99%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date='2019-2024' className='vertical-timeline-element--education' icon={<MdSchool />} iconStyle={{ background: '#000', color: '#fff' }}>
                    <h4>Faculty of Engineering Cairo university</h4>
                    <p>Accumlative GPA : 3.7</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default experiences





