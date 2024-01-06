import React from 'react'

const Personal_Info = (props) => {
  return (
    <>
      <form id='form personal-form'>
        <div className='info-div active'>
            <div className='info-head'>
              <h2 className='info-title'>Personal Information</h2>
            </div>

            <input className='info-input' name='fullName' type='text' placeholder='Full Name' value={props.formData.fullName} onChange={props.personalInfoChange} required />

            <input className='info-input' name='title' type='text' placeholder='Personal Title' value={props.formData.title} onChange={props.personalInfoChange} required />
            
            <textarea className='info-input' name='description' value={props.formData.description} onChange={props.personalInfoChange} cols='30' rows='10' placeholder='Personal Description'></textarea>
        </div>
      </form>
    </>
  )
}

export default Personal_Info