import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Education_Info = (props) => {
  const [eduInfo, setEduInfo] = useState({
    schoolName: '',
    degree: '',
    start: '',
    finish: '',
    extras: [],
    currentTask: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setEduInfo((prevEduInfo) => ({
      ...prevEduInfo,
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

    if (!document.querySelector('.edu-container').classList.contains('work-active')) {
      document.querySelector('.edu-container').classList.toggle('work-active')
    }

    setEduInfo((prevInfo) => ({
      ...prevInfo,
      extras: [
        ...prevInfo.extras,
        {
          id: e.target.previousElementSibling.id,
          content: infoContent,
        },
      ],
      currentTask: '',
    }))
  }

  const submitEduInfo = (e) => {
    if (!document.querySelector('.edu-exp').classList.contains('work-active')) {
      document.querySelector('.edu-exp').classList.toggle('work-active')
    }

    props.otherCatChange(e, 'educationInfo')
  }

  const deleteWorkInfo = (e) => {
    props.deleteOtherCat(props.formData.id, 'educationInfo')
  }

  return (
    <>
      <form id='form education-form'>
        <div className='info-div'>
          <div className='info-head' id='info-head'>
            <h2 className='info-title'>Education</h2>
          </div>

          <div className='edu-exp'>
            <ul>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                  <span id={nanoid()} className='extra-info'>{exp.schoolName + ', ' + exp.start + ' - ' + exp.finish}</span>
                  <button type='button' onClick={deleteWorkInfo}>
                  X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <input className='info-input' name='schoolName' type='text' value={eduInfo.schoolName} onChange={handleChange} placeholder='School Name' required />
          
          <input className='info-input' name='degree' type='text' value={eduInfo.degree} onChange={handleChange} placeholder='Title of Degree' required />

          <input className='info-input' name='start' type='text' value={eduInfo.start} onChange={handleChange} placeholder='Start Date' required />
          
          <input className='info-input' name='finish' type='text' value={eduInfo.finish} onChange={handleChange} placeholder='Graduation Date' required />

          <div className='separate-submit'>
            <input className='info-input ss' value={eduInfo.currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Awards/Organizations/etc.'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <div className='edu-container'>
            <ul className='ul-skill'>
              {eduInfo.extras.map(skills => (
                <li key={nanoid()} className='added-task'>
                  <span id={nanoid()} className='extra-info'>{skills.content}</span>
                  <button onClick={() => {
                    setEduInfo(
                      eduInfo.extras.filter(a =>
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

          <button type='button' className='submit-btn' onClick={submitEduInfo}>Add Education</button>
        </div>
      </form>
    </>
  )
}

export default Education_Info