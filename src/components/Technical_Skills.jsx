import React, { useState } from 'react'
import toggleForm from './Form_Toggle'

const Technical_Skills = (props) => {
    const [inputField, setInputField] = useState('')
    const [technicalSkills, setTechnicalSkills] = useState([])
    
    const handleChange = (e) => {
        setInputField(e.target.value)

        e.preventDefault()
    }

    const submitForm = (e) => { if (inputField.length) { handleFormSubmit(e.nativeEvent) } }

    const handleFormSubmit = (e) => {
        setTechnicalSkills([
            ...technicalSkills,
            {id: technicalSkills.length, name: inputField}
        ])

        props.saveSkillsArray(technicalSkills)
        setInputField('')
    }

    return (
        <>
            <div className='info-div'>
                <div className='info-head'>
                    <h2 className='info-title'>Technical Skills</h2>
                    <span className='info-toggle' onClick={toggleForm}></span>
                </div>

                <div className="info-section user-name">
                    <input className='info-input' value={inputField} onChange={handleChange} name='inputField' type='text' placeholder='Technical Skill' />
                    <div className='update-cv' onClick={submitForm}><span>Add Skill</span></div>
                </div>

                <div className="info-section">
                    <ul>
                        {technicalSkills.map(skills => (
                            <li key={skills.id}>
                                {skills.name}{' '}
                                <button onClick={() => {
                                    setTechnicalSkills(
                                        technicalSkills.filter(a =>
                                        a.id !== skills.id
                                        )
                                    )
                                }}>
                                X
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Technical_Skills