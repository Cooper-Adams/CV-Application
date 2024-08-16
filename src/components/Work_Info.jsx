import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Work_Info = (props) => {
  const [workInfo, setWorkInfo] = useState({
    companyName: '',
    jobTitle: '',
    startDate: '',
    finishDate: '',
    additionalInfo: [],
    currentTask: ''
  })

  const blankState = {
    companyName: '',
    jobTitle: '',
    startDate: '',
    finishDate: '',
    additionalInfo: [],
    currentTask: ''
  }

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
      additionalInfo: [
        ...prevInfo.additionalInfo,
        {
          id: nanoid(),
          content: infoContent,
        },
      ],
      currentTask: '',
    }))
  }

  const deleteSkill = (e) => {
    setWorkInfo((prevInfo) => ({
        ...prevInfo,
        additionalInfo: prevInfo.additionalInfo.filter((task) => task.id !== e.target.id)
    }))

    if ((workInfo.additionalInfo.length - 1) == 0) {
        document.querySelector('.skill-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = workInfo.additionalInfo.map((task) => (
    <li key={nanoid()} className='added-task'>
        <span id={nanoid()} className='extra-info ei-task'>{task.content}</span>
        <button type='button' id={task.id} onClick={deleteSkill}>
        X
        </button>
    </li>
  ))

  const submitWorkInfo = (e) => {
    if (!document.querySelector('.work-exp').classList.contains('work-active')) {
      document.querySelector('.work-exp').classList.toggle('work-active')
    }

    props.otherCatChange(e, 'experienceInfo')

    setWorkInfo(blankState)

    if (workInfo.additionalInfo.length != 0) {
      document.querySelector('.skill-container').classList.toggle('work-active')
    }
  }

  const deleteWorkInfo = (e) => { 
    props.deleteOtherCat(e.target.id, 'experienceInfo')

    if ((props.formData.length - 1) == 0) {
      document.querySelector('.work-exp').classList.toggle('work-active')
    }
  }

  const editWorkInfo = (e) => {
    let infoToEdit = props.formData.find((exp) => exp.id === e.target.id)

    deleteWorkInfo(e)

    setWorkInfo(infoToEdit)

    if (infoToEdit.additionalInfo.length) {
      document.querySelector('.skill-container').classList.toggle('work-active')
    }
  }

  return (
    <>
      <form id='form work-form'>
        <div className='info-div'>
          <div className='info-head'>
            <h2 className='info-title'>Work Experience</h2>
          </div>

          <div className='work-exp'>
            <ul className='ul-total'>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                  <span id={nanoid()} className='extra-info'>{exp.companyName + ', ' + exp.startDate + ' - ' + exp.finishDate}</span>
                  <div className='e-btns'>
                    <button type='button' id={exp.id} onClick={editWorkInfo}>
                      <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10 4H8V6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H8V20H10V4ZM8 8V16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8Z'
                          fill='currentColor'
                        />
                        <path
                          d='M19 16H12V18H19C20.6569 18 22 16.6569 22 15V9C22 7.34315 20.6569 6 19 6H12V8H19C19.5523 8 20 8.44771 20 9V15C20 15.5523 19.5523 16 19 16Z'
                          fill='currentColor'
                        />
                      </svg>
                    </button>
                    
                    <button type='button' id={exp.id} onClick={deleteWorkInfo}>
                      <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z'
                          fill='currentColor'
                        />
                        <path d='M9 9H11V17H9V9Z' fill='currentColor' />
                        <path d='M13 9H15V17H13V9Z' fill='currentColor' />
                      </svg>
                    </button>
                  </div>
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
              {workInfo.additionalInfo.length ? displaySkills : ''}
            </ul>
          </div>

          <button type='button' className='submit-btn' onClick={submitWorkInfo}>Add Work Experience</button>
        </div>
      </form>
    </>
  )
}

export default Work_Info