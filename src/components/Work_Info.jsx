import React, { useState } from 'react'

const Work_Info = (props) => {
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'companyName':
        setCompanyName(e.target.value)
        break
      case 'jobTitle':
        setJobTitle(e.target.value)
        break
      case 'startDate':
        setStartDate(e.target.value)
        break
      case 'finishDate':
        setFinishDate(e.target.value)
        break
      case 'jobDescription':
        setJobDescription(e.target.value)
        break
    }

    e.preventDefault()

    handleFormSubmit(e)
  }

  const handleFormSubmit = (e) => {
    const formData = {
      companyName: companyName,
      jobTitle: jobTitle,
      startDate: startDate,
      finishDate: finishDate,
      jobDescription: jobDescription,
      form: 'work-form',
    }

    props.saveFormInput(formData)
  }

  return (
    <>
      <form id='work-form'>
        <div className='info-div'>
          <div className='info-head'>
            <h2 className='info-title'>Work Experience</h2>
          </div>

          <div className="info-section user-name">
            <input className='info-input' value={companyName} onChange={handleChange} name='companyName' type='text' placeholder='Company Name' />
            <input className='info-input' value={jobTitle} onChange={handleChange} name='jobTitle' type='text' placeholder='Job Title' />
          </div>

          <div className="info-section user-name">
            <input className='info-input' value={startDate} onChange={handleChange} name='startDate' type='text' placeholder='Start Date (MM/YYYY)' />
            <input className='info-input' value={finishDate} onChange={handleChange} name='finishDate' type='text' placeholder='End Date' />
          </div>
          
          <div className="info-section update-functions">
            <textarea className='info-input' value={jobDescription} onChange={handleChange} name='jobDescription' cols='30' rows='10' placeholder='Job Description'></textarea>
          </div>
        </div>
      </form>
    </>
  )
}

export default Work_Info