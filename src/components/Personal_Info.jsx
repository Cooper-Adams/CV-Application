import React, { useState } from 'react'
import toggleForm from './Form_Toggle'

const Personal_Info = (props) => {
  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedIn] = useState('')
  const [website, setWebsite] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'fullName':
        setFullName(e.target.value)
        break
      case 'title':
        setTitle(e.target.value)
        break
      case 'address':
          setAddress(e.target.value)
          break
      case 'email':
        setEmail(e.target.value)
        break
      case 'phone':
        setPhone(e.target.value)
        break
      case 'linkedin':
        setLinkedIn(e.target.value)
        break
      case 'website':
        setWebsite(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
    }

    e.preventDefault()
  }

  const submitForm = (e) => { 
    if (fullName.length || email.length || phone.length || address.length || title.length || linkedin.length || website.length || description.length) {
      handleFormSubmit(e.nativeEvent)
    }
  }

  const handleFormSubmit = (e) => {    
    const formData = {
      fullName: fullName,
      title: title,
      address: address,
      email: email,
      phone: phone,
      linkedin: linkedin,
      website: website,
      description: description,
      form: 'personal-form',
    }

    props.saveFormInput(formData)
    setFullName('')
    setTitle('')
    setAddress('')
    setEmail('')
    setPhone('')
    setLinkedIn('')
    setWebsite('')
    setDescription('')
    toggleForm(e)
  }

  return (
    <>
      <form id='personal-form'>
        <div className='info-div active'>
          <div className='info-head'>
            <h2 className='info-title'>Personal Information</h2>
            <span className='info-toggle' onClick={toggleForm}></span>
          </div>

          <div className='info-section user-name active'>
            <input className='info-input' name='fullName' type='text' placeholder='Full Name' value={fullName} onChange={handleChange} required />
          </div>

          <div className='info-section contact-info active'>
            <input className='info-input' name='title' type='text' placeholder='Personal Title' value={title} onChange={handleChange} required />
            <input className='info-input' name='address' type='text' placeholder='City, Country' value={address} onChange={handleChange} required />
          </div>
            
          <div className='info-section contact-info active'>
            <input className='info-input' name='email' type='email' placeholder='Email Address' value={email} onChange={handleChange} required />
            <input className='info-input' name='phone' type='tel' placeholder='Phone Number' value={phone} onChange={handleChange} required />
          </div>

          <div className='info-section contact-info active'>
            <input className='info-input' name='linkedin' type='text' placeholder='LinkedIn' value={linkedin} onChange={handleChange} required />
            <input className='info-input' name='website' type='text' placeholder='Website/Github/etc.' value={website} onChange={handleChange} required />
          </div>

          <div className="info-section update-functions active">
            <textarea className='info-input' name='description' value={description} onChange={handleChange} cols='30' rows='10' placeholder='Personal Description'></textarea>
          </div>

          <div className="info-section update-functions active">
            <div className='update-cv' onClick={submitForm}><span>Save</span></div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Personal_Info