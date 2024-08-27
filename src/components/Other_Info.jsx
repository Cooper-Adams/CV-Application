import React, { useState } from 'react'
import Section_Head from './_Section_Head'
import { nanoid } from 'nanoid'

const Other_Info = (props) => {
  const [otherCat, setOtherCat] = useState({
    title: '',
    additionalInfo: [],
    currentTask: '',
    side: false,
    id: ''
  })

  const blankState = {
    title: '',
    additionalInfo: [],
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
    let infoContent

    if (e.type === 'keydown' && e.key !== 'Enter') return
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value
    } else if (e.key === 'Enter') infoContent = e.target.value

    if (!infoContent) { return }

    if (!document.querySelector('.other-container').classList.contains('work-active')) {
      document.querySelector('.other-container').classList.toggle('work-active')
    }

    setOtherCat((prevInfo) => ({
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
    setOtherCat((prevInfo) => ({
        ...prevInfo,
        additionalInfo: prevInfo.additionalInfo.filter((skill) => skill.id !== e.target.id)
    }))

    if ((otherCat.additionalInfo.length - 1) == 0) {
        document.querySelector('.other-container').classList.toggle('work-active')
    }
  }
  
  const displaySkills = otherCat.additionalInfo.map((skill) => (    
    <li key={nanoid()} className='added-task'>
        <span id={nanoid()} className='extra-info ei-task'>{skill.content}</span>
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

    if (otherCat.additionalInfo.length != 0) {
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

  const editOtherInfo = (e) => {
    let infoToEdit = props.formData.find((exp) => exp.id === e.target.id)

    setOtherCat(infoToEdit)

    if (infoToEdit.additionalInfo.length) {
      document.querySelector('.other-container').classList.toggle('work-active')
    }
  }

  const reOrder = (e) => { 
    props.reorderInfo(e, 'educationInfo')
  }

  console.log(otherCat.title)

  return (
    <>
      <form id='form other-form'>
        <div className='info-div'>
          <Section_Head section_title={'Other Information'}/>
          
          <span style={{display: (props.formData.length > 0) ? 'none' : 'block'}}>If you have extra space and still have relevant information to display, add it here.</span>

          <div className='other-exp'>
            <ul className='ul-total'>
              {props.formData.map((exp, index) => (
                <li key={nanoid()} className='added-work-exp'>
                    <span id={nanoid()}>{exp.title}</span>

                    <div className='e-btns'>
                      <button type='button' id={index} onClick={reOrder} style={{display: (props.formData.length == 1 || index == 0) ? 'none' : 'block'}}>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 1024 1024' className='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='none' transform='matrix(1, 0, 0, -1, 0, 0)'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z' fill='currentColor'></path></g></svg>
                      </button>

                      <button type='button' className='down' id={index} onClick={reOrder} style={{display: (props.formData.length == 1 || index == props.formData.length - 1) ? 'none' : 'block'}}>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 1024 1024' className='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='none'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z' fill='currentColor'></path></g></svg>
                      </button>

                      <button type='button' id={exp.id} onClick={editOtherInfo}>
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

                      <button type='button' id={exp.id} value={exp.side} onClick={deleteSkillInfo}>
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

          <input className='info-input' name='title' type='text' value={otherCat.title} onChange={handleChange} placeholder='Category Title' required />

          <div className='separate-submit'>
            <input className='info-input ss' value={otherCat.currentTask} onChange={handleChange} name='currentTask' type='text' placeholder='Information'></input>

            <button type='button' className='submit-task' onClick={submitTask}>+</button>
          </div>

          <span className='lrCheck'>
            Left Panel
            <input className='lrSwitch' type='checkbox' name='side' id='lrSwitch' onChange={handleChange} value={otherCat.side} checked={JSON.parse(otherCat.side)}/>
            <label onClick={handleChange}></label>
            Right Panel
          </span>

          <div className='other-container'>
            <ul className='ul-skill'>
                {otherCat.additionalInfo.length != 0 ? displaySkills : ''}
            </ul>
          </div>

          <input className='info-input' name='id' type='text' defaultValue={otherCat.id} placeholder='id' hidden />

          <button type='button' className='submit-btn' onClick={submitSkillInfo}>Add Category</button>
        </div>
      </form>
    </>
  )
}

export default Other_Info