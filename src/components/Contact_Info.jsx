import React, { useState } from 'react'

const Contact_Info = (props) => {
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedIn] = useState('')
  const [website, setWebsite] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
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
    }

    e.preventDefault()

    handleFormSubmit(e)
  }

  const handleFormSubmit = (e) => {    
    const formData = {
      address: address,
      email: email,
      phone: phone,
      linkedin: linkedin,
      website: website,
      form: 'contact-form',
    }

    props.saveFormInput(formData)
  }

  return (
    <>
      <form id='contact-form'>
        <div className='info-div active'>
            <div className='info-head'>
                <h2 className='info-title'>Contact Information</h2>
            </div>
        
            <input className='info-input' name='address' type='text' placeholder='City, State' value={address} onChange={handleChange} required />
            
            <input className='info-input' name='email' type='email' placeholder='Email Address' value={email} onChange={handleChange} required />
            
            <input className='info-input' name='phone' type='tel' placeholder='Phone Number' value={phone} onChange={handleChange} required />
            
            <input className='info-input' name='linkedin' type='text' placeholder='LinkedIn' value={linkedin} onChange={handleChange} required />
            
            <input className='info-input' name='website' type='text' placeholder='Website/Github/etc.' value={website} onChange={handleChange} required />
        </div>
      </form>
    </>
  )
}

export default Contact_Info