import React from 'react'
import Section_Head from './_Section_Head'

const Personal_Info = (props) => {
  return (
    <>
      <form id='form personal-form'>
        <div className='info-div'>
            <Section_Head section_title={'Personal Information'} display={'xincpot'}/>

            <input className='info-input' name='fullName' type='text' placeholder='Full Name' value={props.formData.fullName} onChange={props.personalInfoChange} required />

            <input className='info-input' name='title' type='text' placeholder='Personal Title' value={props.formData.title} onChange={props.personalInfoChange} required />
            
            <textarea className='info-input' name='description' value={props.formData.description} onChange={props.personalInfoChange} cols='30' rows='10' placeholder='Personal Description'></textarea>
        </div>
      </form>
    </>
  )
}

export default Personal_Info