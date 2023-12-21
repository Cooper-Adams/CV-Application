import React, { useState } from 'react'

const Personal_Info = (props) => {
  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'fullName':
        setFullName(e.target.value)
        break
      case 'title':
        setTitle(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
    }

    e.preventDefault()

    handleFormSubmit(e)
  }

  const handleFormSubmit = (e) => {    
    const formData = {
      fullName: fullName,
      title: title,
      description: description,
      form: 'personal-form',
    }

    props.saveFormInput(formData)
  }

  return (
    <>
      {console.log(fullName)}
      <form id='personal-form'>
        <div className='info-div active'>
            <div className='info-head'>
              <h2 className='info-title'>Personal Information</h2>
            </div>

            <input className='info-input' name='fullName' type='text' placeholder='Full Name' value={fullName} onChange={handleChange} required />

            <input className='info-input' name='title' type='text' placeholder='Personal Title' value={title} onChange={handleChange} required />
            
            <textarea className='info-input' name='description' value={description} onChange={handleChange} cols='30' rows='10' placeholder='Personal Description'></textarea>
        </div>
      </form>
    </>
  )
}

export default Personal_Info