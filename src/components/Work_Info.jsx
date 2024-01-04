import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Work_Info = (props) => {
  const [workInfo, setWorkInfo] = useState({
    companyName: '',
    jobTitle: '',
    startDate: '',
    finishDate: '',
    tasks: [],
    currentTask: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setWorkInfo((prevWorkInfo) => ({
      ...prevWorkInfo,
      [name]: value
    }))
  }

  const submitTask = (e) => {
    let infoContent;

    if (e.type === 'keydown' && e.key !== 'Enter') return;
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value;
    } else if (e.key === 'Enter') infoContent = e.target.value;

    if (!infoContent) { return }

    if (!document.querySelector('.skill-container').classList.contains('work-active')) {
      document.querySelector('.skill-container').classList.toggle('work-active')
    }

    setWorkInfo((prevInfo) => ({
      ...prevInfo,
      tasks: [
        ...prevInfo.tasks,
        {
          id: e.target.previousElementSibling.id,
          content: infoContent,
        },
      ],
      currentTask: '',
    }))
  }

  const submitWorkInfo = (e) => {
    if (!document.querySelector('.work-exp').classList.contains('work-active')) {
      document.querySelector('.work-exp').classList.toggle('work-active')
    }

    props.otherCatChange(e, 'experienceInfo')
  }

  const deleteWorkInfo = (e) => {
    props.deleteOtherCat(props.formData.id, 'experienceInfo')
  }

  return (
    <>
      <form id='form work-form'>
        <div className='info-div'>
          <div className='info-head'>
            <h2 className='info-title'>Work Experience</h2>
          </div>

          <div className='work-exp'>
            <ul>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                  <span id={nanoid()} className='extra-info'>{exp.companyName + ', ' + exp.startDate + ' - ' + exp.finishDate}</span>
                  <button type='button' onClick={deleteWorkInfo}>
                  X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <input className='info-input' value={workInfo.companyName} onChange={handleChange} name='companyName' type='text' placeholder='Company Name' />
          
          <input className='info-input' value={workInfo.jobTitle} onChange={handleChange} name='jobTitle' type='text' placeholder='Job Title' />

          <input className='info-input' value={workInfo.startDate} onChange={handleChange} name='startDate' type='text' placeholder='Start Date (MM/YYYY)' />
          
          <input className='info-input' value={workInfo.finishDate} onChange={handleChange} name='finishDate' type='text' placeholder='End Date' />

          <div className='separate-submit'>
            <input className='info-input ss' value={workInfo.currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Responsibilities'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <div className='skill-container'>
            <ul className='ul-skill'>
              {workInfo.tasks.map(skills => (
                <li key={nanoid()} className='added-task'>
                  <span id={nanoid()} className='extra-info'>{skills.content}</span>
                  <button onClick={() => {
                    setWorkInfo(
                      workInfo.tasks.filter(a =>
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

          <button type='button' className='submit-btn' onClick={submitWorkInfo}>Add Work Experience</button>
        </div>
      </form>
    </>
  )
}

export default Work_Info