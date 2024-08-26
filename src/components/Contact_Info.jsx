import React from 'react'
import Section_Head from './_Section_Head'

const Contact_Info = (props) => {
  return (
    <>
      <form id='form contact-form'>
        <div className='info-div'>
          <Section_Head section_title={'Contact Information'}/>
        
          <input className='info-input' autoComplete='true' name='email' type='email' placeholder='Email Address' value={props.formData.email} onChange={props.contactInfoChange} required />
            
          <input className='info-input' autoComplete='true' name='phone' type='tel' placeholder='Phone Number' value={props.formData.phone} onChange={props.contactInfoChange} required />

          <input className='info-input' autoComplete='true' name='address' type='text' placeholder='City, State' value={props.formData.address} onChange={props.contactInfoChange} required />            
            
          <input className='info-input' name='linkedin' type='text' placeholder='LinkedIn' value={props.formData.linkedin} onChange={props.contactInfoChange} required />
            
          <input className='info-input' name='website' type='text' placeholder='Website/Github/etc.' value={props.formData.website} onChange={props.contactInfoChange} required />
        </div>
      </form>
    </>
  )
}

export default Contact_Info