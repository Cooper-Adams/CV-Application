import React, { useState } from 'react'
import Section_Head from './_Section_Head'
import { nanoid } from 'nanoid'

const Other_Info = (props) => {
  const [otherCat, setOtherCat] = useState({
    title: '',
    skills: [],
    currentTask: '',
    side: false
  })

  const blankState = {
    title: '',
    skills: [],
    currentTask: '',
    side: false
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    if (name === undefined) {
      setOtherCat((prevInfo) => ({
        ...prevInfo,
        side: otherCat.side ? false : true
      }))
    } else {
      setOtherCat((prevInfo) => ({
        ...prevInfo,
        [name]: value
      }))
    }
  }

  const submitTask = (e) => {
    let infoContent;

    if (e.type === 'keydown' && e.key !== 'Enter') return;
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value;
    } else if (e.key === 'Enter') infoContent = e.target.value;

    if (!infoContent) { return }

    if (!document.querySelector('.other-container').classList.contains('work-active')) {
      document.querySelector('.other-container').classList.toggle('work-active')
    }

    setOtherCat((prevInfo) => ({
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
    setOtherCat((prevInfo) => ({
        ...prevInfo,
        skills: prevInfo.skills.filter((skill) => skill.id !== e.target.id)
    }))

    if ((otherCat.skills.length - 1) == 0) {
        document.querySelector('.other-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = otherCat.skills.map((skill) => (
    <li key={nanoid()} className='added-task'>
        <span id={nanoid()} className='extra-info'>{skill.content}</span>
        <button type='button' id={skill.id} onClick={deleteSkill}>
        X
        </button>
    </li>
  ))

  const submitSkillInfo = (e) => { 
    if (!document.querySelector('.other-exp').classList.contains('work-active')) {
      document.querySelector('.other-exp').classList.toggle('work-active')
    }

    otherCat.side ? props.otherCatChange(e, 'otherCatR') : props.otherCatChange(e, 'otherCatL')

    setOtherCat(blankState)

    if (otherCat.skills.length != 0) {
      document.querySelector('.other-container').classList.toggle('work-active')
    }
  }

  const deleteSkillInfo = (e) => {
    if (e.target.value == true) {
      props.deleteOtherCat(e.target.id, 'otherCatR')
    } else {
      props.deleteOtherCat(e.target.id, 'otherCatL')
    }

    if ((props.formData.length - 1) == 0) {
        document.querySelector('.other-exp').classList.toggle('work-active')
    }
  }

  return (
    <>
      <form id='form other-form'>
        <div className='info-div'>
          <Section_Head section_title={'Other Information'}/>
          
          <span>If you have extra space and still have relevant information to display, add it here.</span>

          <div className='other-exp'>
            <ul className='ul-total'>
              {props.formData.map(exp => (
                <li key={nanoid()} className='added-work-exp'>
                    <span id={nanoid()}>{exp.title}</span>
                    <button type='button' id={exp.id} value={exp.side} onClick={deleteSkillInfo}>
                    X
                    </button>
                </li>
              ))}
            </ul>
          </div>

          <input className='info-input' name='title' type='text' value={otherCat.title} onChange={handleChange} placeholder='Category Title' required />

          <div className='separate-submit'>
            <input className='info-input ss' value={otherCat.currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Information'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <span className='lrCheck'>
            Left Panel
            <input className='lrSwitch' type='checkbox' name='side' id='lrSwitch' onChange={handleChange} value={otherCat.side} checked={otherCat.side}/>
            <label onClick={handleChange}></label>
            Right Panel
          </span>

          <div className='other-container'>
            <ul className='ul-skill'>
                {otherCat.skills.length ? displaySkills : ''}
            </ul>
          </div>

          <button type='button' className='submit-btn' onClick={submitSkillInfo}>Add Category</button>
        </div>
      </form>
    </>
  )
}

export default Other_Info