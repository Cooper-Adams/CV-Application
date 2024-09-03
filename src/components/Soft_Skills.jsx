import React, { useState } from 'react'
import Section_Head from './_Section_Head'
import { nanoid } from 'nanoid'

const Soft_Skills = (props) => {
  const [skillInfo, setSkillInfo] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const handleChange = (e) => { setCurrentTask(e.target.value) }

  const submitTask = (e) => {
    let infoContent;

    if (e.type === 'keydown' && e.key !== 'Enter') return;
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value;
    } else if (e.key === 'Enter') infoContent = e.target.value;

    if (!infoContent) { return }

    if (!document.querySelector('.soft-container').classList.contains('work-active')) {
      document.querySelector('.soft-container').classList.toggle('work-active')
    }

    setSkillInfo((prevInfo) => (
      [
        ...prevInfo,
        {
          id: nanoid(),
          content: infoContent
        }
      ]
    ))

    setCurrentTask('')
  }

  const deleteSkill = (e) => {
    setSkillInfo(
      skillInfo.filter(a => a.id !== e.target.id)
    )

    if ((skillInfo.length - 1) == 0) {
        document.querySelector('.soft-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = skillInfo.map(skill => (
    <li key={nanoid()} className='added-task'>
        <span id={nanoid()} className='extra-info'>{skill.content}</span>
        <button type='button' id={skill.id} onClick={deleteSkill}>
        X
        </button>
    </li>
  ))

  const submitSkillInfo = (e) => { props.otherCatChange(e, 'softSkills') }

  return (
    <>
      <form id='form soft-form'>
        <div className='info-div'>
          <Section_Head section_title={'Soft Skills'} display={props.softDisplay} setDisplay={props.setSoftDisplay}/>

          <div className='separate-submit'>
            <input className='info-input ss' value={currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Skill'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <div className='soft-container'>
            <ul className='ul-skill'>
                {skillInfo.length ? displaySkills : ''}
            </ul>
          </div>

          <button type='button' className='submit-btn' onClick={submitSkillInfo}>Add Skills</button>
        </div>
      </form>
    </>
  )
}

export default Soft_Skills