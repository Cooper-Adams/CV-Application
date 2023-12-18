import React, { useState } from 'react'

const Technical_Skills = (props) => {
    const [inputFieldA, setInputFieldA] = useState('')
    const [inputFieldB, setInputFieldB] = useState('')
    const [technicalSkills, setTechnicalSkills] = useState([])
    const [skills, setSkills] = useState([])
    
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'skillTitle':
                setInputFieldA(e.target.value)
                break
            case 'skill':
                setInputFieldB(e.target.value)
                break
        }

        e.preventDefault()
    }

    const submitForm = (e) => { if (inputFieldA.length && skills.length) { handleFormSubmit(e.nativeEvent) } }

    const handleFormSubmit = (e) => {
        setSkills([
            ...skills,
            inputFieldB
        ])

        setTechnicalSkills([
            ...technicalSkills,
            {id: technicalSkills.length, title: inputFieldA, skills: skills}
        ])

        props.saveSkillsArray(technicalSkills)
        setInputFieldA('')
        setInputFieldB('')
    }

    return (
        <>
            <div className='info-div'>
                <div className='info-head'>
                    <h2 className='info-title'>Technical Skills</h2>
                </div>

                <div className="info-section user-name">
                    <input className='info-input' value={inputFieldA} onChange={handleChange} name='skillTitle' type='text' placeholder='Skill Title (Tools/Languages/etc.)' />
                    <input className='info-input' value={inputFieldB} onChange={handleChange} name='skills' type='text' placeholder='Skill' />
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