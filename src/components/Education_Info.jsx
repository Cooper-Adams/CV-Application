import React, { useState } from 'react'
import toggleForm from './Form_Toggle'

const Education_Info = (props) => {
  const [schoolName, setSchoolName] = useState('')
  const [degree, setDegree] = useState('')
  const [schoolStart, setSchoolStart] = useState('')
  const [schoolFinish, setSchoolFinish] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'schoolName':
        setSchoolName(e.target.value)
        break
      case 'degree':
        setDegree(e.target.value)
        break
      case 'schoolStart':
        setSchoolStart(e.target.value)
        break
      case 'schoolFinish':
        setSchoolFinish(e.target.value)
        break
    }

    e.preventDefault()
  }

  const submitForm = (e) => { 
    if (schoolName.length || degree.length || schoolStart.length || schoolFinish.length) {
      handleFormSubmit(e.nativeEvent)
    }
  }

  const handleFormSubmit = (e) => {
    const formData = {
      schoolName: schoolName,
      degree: degree,
      schoolStart: schoolStart,
      schoolFinish: schoolFinish,
      form: 'education-form',
    }

    props.saveFormInput(formData)
    setSchoolName('')
    setDegree('')
    setSchoolStart('')
    setSchoolFinish('')
    toggleForm(e)
  }

  return (
    <>
      <form id='education-form'>
        <div className='info-div'>
          <div className='info-head' id='info-head'>
            <h2 className='info-title'>Education</h2>
            <span className='info-toggle' onClick={toggleForm}></span>
          </div>

          <div className="info-section user-name">
            <input className='info-input' name='schoolName' type='text' value={schoolName} onChange={handleChange} placeholder='School Name' required />
            <input className='info-input' name='degree' type='text' value={degree} onChange={handleChange} placeholder='Title of Degree' required />
          </div>

          <div className="info-section user-name">
            <input className='info-input' name='schoolStart' type='text' value={schoolStart} onChange={handleChange} placeholder='Start Date (MM/YYYY)' required />
            <input className='info-input' name='schoolFinish' type='text' value={schoolFinish} onChange={handleChange} placeholder='End Date' required />
          </div>
          
          <div className="info-section update-functions">
            <div className='update-cv' onClick={submitForm}><span>Save</span></div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Education_Info