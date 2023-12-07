import React, { useState } from 'react'
import toggleForm from './Form_Toggle'

const Personal_Info = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [fileName, setFileName] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value)
        break
      case 'lastName':
        setLastName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'phone':
        setPhone(e.target.value)
        break
      case 'address':
        setAddress(e.target.value)
        break
      case 'fileName':
        setFileName(e.target.value)
        break
    }

    e.preventDefault()
  }

  const submitForm = (e) => { 
    if (firstName.length || lastName.length || email.length || phone.length || address.length) {
      handleFormSubmit(document.getElementById('personal-form'))
    }
  }

  const handleFormSubmit = (e) => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      fileName: fileName,
      form: 'personal-form',
    }

    props.saveFormInput(formData)
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
            <input className='info-input' name='firstName' type='text' placeholder='First Name' value={firstName} onChange={handleChange} required />
            <input className='info-input' name='lastName' type='text' placeholder='Last Name' value={lastName} onChange={handleChange} required />
          </div>
            
          <div className='info-section contact-info active'>
            <input className='info-input' name='email' type='email' placeholder='Email Address' value={email} onChange={handleChange} required />
            <input className='info-input' name='phone' type='tel' placeholder='Phone Number' value={phone} onChange={handleChange} required />
            <input className='info-input' name='address' type='text' placeholder='City, Country' value={address} onChange={handleChange} required />
          </div>

          <div className='info-section update-functions active'>
            <label htmlFor='file' id='file-upload'> {fileName ? fileName : 'Upload Picture'} </label>
            <input type='file' id='file' accept='image/*' name='fileName' onChange={handleChange} />
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