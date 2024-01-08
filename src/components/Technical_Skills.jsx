import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Technical_Skills = (props) => {
  const [skillInfo, setSkillInfo] = useState({
    title: '',
    additionalInfo: [],
    currentTask: ''
  })

  const blankState = {
    title: '',
    additionalInfo: [],
    currentTask: ''
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setSkillInfo((prevInfo) => ({
      ...prevInfo,
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

    if (!document.querySelector('.tsk-container').classList.contains('work-active')) {
      document.querySelector('.tsk-container').classList.toggle('work-active')
    }

    setSkillInfo((prevInfo) => ({
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
    setSkillInfo((prevInfo) => ({
        ...prevInfo,
        additionalInfo: prevInfo.additionalInfo.filter((skill) => skill.id !== e.target.id)
    }))

    if ((skillInfo.additionalInfo.length - 1) == 0) {
        document.querySelector('.tsk-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = skillInfo.additionalInfo.map((skill) => (
    <li key={nanoid()} className='added-task'>
        <span id={nanoid()} className='extra-info'>{skill.content}</span>
        <button type='button' id={skill.id} onClick={deleteSkill}>
        X
        </button>
    </li>
  ))

  const submitSkillInfo = (e) => {
    if (!document.querySelector('.tsk-exp').classList.contains('work-active')) {
      document.querySelector('.tsk-exp').classList.toggle('work-active')
    }

    props.otherCatChange(e, 'technicalSkills')

    setSkillInfo(blankState)

    if (skillInfo.additionalInfo.length != 0) {
        document.querySelector('.tsk-container').classList.toggle('work-active')
    }
  }

  const deleteSkillInfo = (e) => {
    props.deleteOtherCat(e.target.id, 'technicalSkills')

    if ((props.formData.length - 1) == 0) {
        document.querySelector('.tsk-exp').classList.toggle('work-active')
    }
  }

  const editTechSkills = (e) => {
    let infoToEdit = props.formData.find((exp) => exp.id === e.target.id)

    deleteSkillInfo(e)

    setSkillInfo(infoToEdit)

    if (infoToEdit.additionalInfo.length) {
      document.querySelector('.tsk-container').classList.toggle('work-active')
    }
  }

  return (
    <>
      <form id='form technical-form'>
        <div className='info-div'>
          <div className='info-head' id='info-head'>
            <h2 className='info-title'>Technical Skills</h2>
          </div>

          <div className='tsk-exp'>
            <ul className='ul-total'>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                    <span id={nanoid()}>{exp.title}</span>
                    <div className='e-btns'>
                      <button type='button' id={exp.id} onClick={editTechSkills}>
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
                      
                      <button type='button' id={exp.id} onClick={deleteSkillInfo}>
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

          <input className='info-input' name='title' type='text' value={skillInfo.title} onChange={handleChange} placeholder='Skill Type' required />

          <div className='separate-submit'>
            <input className='info-input ss' value={skillInfo.currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Skill'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <div className='tsk-container'>
            <ul className='ul-skill'>
                {skillInfo.additionalInfo.length ? displaySkills : ''}
            </ul>
          </div>

          <button type='button' className='submit-btn' onClick={submitSkillInfo}>Add Skills</button>
        </div>
      </form>
    </>
  )
}

export default Technical_Skills