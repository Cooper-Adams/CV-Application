import React, { useState } from 'react'
import toggleForm from './Form_Toggle'

const Education_Info = (props) => {
  const [schoolName, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'schoolName':
        setSchool(e.target.value)
        break
      case 'degree':
        setDegree(e.target.value)
        break
      case 'startDate':
        setStartDate(e.target.value)
        break
      case 'finishDate':
        setFinishDate(e.target.value)
        break
    }

    e.preventDefault()
  }

  const submitForm = (e) => { 
    if (schoolName.length || degree.length || startDate.length || finishDate.length) {
      handleFormSubmit(document.getElementById('education-form'))
    }
  }

  const handleFormSubmit = (e) => {
    const formData = {
      schoolName: schoolName,
      degree: degree,
      startDate: startDate,
      finishDate: finishDate,
      form: 'education-form',
    }

    props.saveFormInput(formData)
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
            <input className='info-input' name='schoolName' type='text' onChange={handleChange} placeholder='School Name' required />
            <input className='info-input' name='degree' type='text' onChange={handleChange} placeholder='Title of Degree' required />
          </div>

          <div className="info-section user-name">
            <input className='info-input' name='startDate' type='text' onChange={handleChange} placeholder='Start Date (MM/YYYY)' required />
            <input className='info-input' name='finishDate' type='text' onChange={handleChange} placeholder='End Date' required />
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