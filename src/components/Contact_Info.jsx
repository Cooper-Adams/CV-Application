import React from 'react'

const Contact_Info = (props) => {
  return (
    <>
      <form id='form contact-form'>
        <div className='info-div active'>
            <div className='info-head'>
                <h2 className='info-title'>Contact Information</h2>
            </div>
        
            <input className='info-input' name='email' type='email' placeholder='Email Address' value={props.formData.email} onChange={props.contactInfoChange} required />
            
            <input className='info-input' name='phone' type='tel' placeholder='Phone Number' value={props.formData.phone} onChange={props.contactInfoChange} required />

            <input className='info-input' name='address' type='text' placeholder='City, State' value={props.formData.address} onChange={props.contactInfoChange} required />            
            
            <input className='info-input' name='linkedin' type='text' placeholder='LinkedIn' value={props.formData.linkedin} onChange={props.contactInfoChange} required />
            
            <input className='info-input' name='website' type='text' placeholder='Website/Github/etc.' value={props.formData.website} onChange={props.contactInfoChange} required />
        </div>
      </form>
    </>
  )
}

export default Contact_Info