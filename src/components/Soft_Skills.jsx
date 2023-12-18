import React, { useState } from 'react'

const Soft_Skills = (props) => {
    const [inputField, setInputField] = useState('')
    const [softSkills, setSoftSkills] = useState([])
    
    const handleChange = (e) => {
        setInputField(e.target.value)

        e.preventDefault()
    }

    const submitForm = (e) => { if (inputField.length) { handleFormSubmit(e.nativeEvent) } }

    const handleFormSubmit = (e) => {
        setSoftSkills([
            ...softSkills,
            {id: softSkills.length, skill: inputField}
        ])

        props.saveSkillsArray(softSkills)
        setInputField('')
    }

    return (
        <>
            <div className='info-div'>
                <div className='info-head'>
                    <h2 className='info-title'>Soft Skills</h2>
                </div>

                <div className="info-section user-name">
                    <input className='info-input' value={inputField} onChange={handleChange} name='inputField' type='text' placeholder='Soft Skill' />
                    <div className='update-cv' onClick={submitForm}><span>Add Skill</span></div>
                </div>

                <div className="info-section">
                    <ul>
                        {softSkills.map(skills => (
                            <li key={skills.id}>
                                {skills.skill}{' '}
                                <button onClick={() => {
                                    setSoftSkills(
                                        softSkills.filter(a =>
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

export default Soft_Skills