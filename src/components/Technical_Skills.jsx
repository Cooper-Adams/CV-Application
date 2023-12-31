import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Technical_Skills = (props) => {
  const [skillInfo, setSkillInfo] = useState({
    title: '',
    skills: [],
    currentTask: ''
  })

  const blankState = {
    title: '',
    skills: [],
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
      skills: [
        ...prevInfo.skills,
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
        skills: prevInfo.skills.filter((skill) => skill.id !== e.target.id)
    }))

    if ((skillInfo.skills.length - 1) == 0) {
        document.querySelector('.tsk-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = skillInfo.skills.map((skill) => (
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

    if (skillInfo.skills.length != 0) {
        document.querySelector('.tsk-container').classList.toggle('work-active')
    }
  }

  const deleteSkillInfo = (e) => {
    props.deleteOtherCat(e.target.id, 'technicalSkills')

    if ((props.formData.length - 1) == 0) {
        document.querySelector('.tsk-exp').classList.toggle('work-active')
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
            <ul>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                    <span id={nanoid()} className='extra-info'>{exp.title}</span>
                    <button type='button' id={exp.id} onClick={deleteSkillInfo}>
                    X
                    </button>
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
            <ul>
                {skillInfo.skills.length ? displaySkills : ''}
            </ul>
          </div>

          <button type='button' className='submit-btn' onClick={submitSkillInfo}>Add Skills</button>
        </div>
      </form>
    </>
  )
}

export default Technical_Skills