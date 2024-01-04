import React from 'react'
import { nanoid } from 'nanoid'

const Render_Professional = (props) => {
    const proRender = props.formData.map(job => {
        console.log(job)
        return(
            <div className='fp-inner-container'>
                <div className='fp-inner-upper'>
                    <div className='fp-titles-div'>
                        <h3 className='fp-inner-title-head'>{job.jobTitle}</h3>
                        <h4 className='fp-inner-subtitle-head'>{job.companyName}</h4>
                    </div>

                    <span className='fp-inner-tofrom'>{job.startDate} - {job.finishDate}</span>
                </div>

                <ul className='fp-inner-lower-ul'>
                    {job.additionalInfo.map(task => (
                        <li key={nanoid()} className='fp-inner-left-li'>
                            <span className='fp-inner-span'>{task.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    })

    return (
        <>
            <h5>WORK EXPERIENCE</h5>

            <div className='fp-inner-div'>
                {proRender}
            </div>
        </>
    )
}

export default Render_Professional