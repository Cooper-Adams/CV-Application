import React from 'react'
import { nanoid } from 'nanoid'

const Render_Education = (props) => {
    const eduRender = props.formData.map(edu => {
        return(
            <div key={nanoid()} className='fp-inner-container'>
                <div className='fp-inner-upper'>
                    <div className='fp-titles-div'>
                        <h3 className='fp-inner-title-head'>{edu.schoolName || 'School Name'}</h3>
                        <h4 className='fp-inner-subtitle-head'>{edu.degree || 'Degree Title'}</h4>
                    </div>

                    <span className='fp-inner-tofrom'>{edu.start || 'Start Date'} - {edu.finish || 'Finish Date'}</span>
                </div>

                <ul className='fp-inner-lower-ul'>
                    {edu.additionalInfo.map(task => (
                        <li key={nanoid()} className='fp-inner-left-li'>
                            <span className='fp-inner-span'>{task.content || 'Additional Information'}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    })

    return (
        <>
            <h5>EDUCATION</h5>

            <div className='fp-inner-div'>
                {eduRender}
            </div>
        </>
    )
}

export default Render_Education