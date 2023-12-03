import React, { useState } from 'react'

const Work_Info = (props) => {
  return (
    <>
      <div className='info-div'>
        <h2>Experience</h2>
        <input className='info-input' type='text' placeholder='Company Name' />
        <input className='info-input' type='text' placeholder='Job Title' />
        <input className='info-input' type='text' placeholder='Start Date (MM/YYYY)' />
        <input className='info-input' type='text' placeholder='End Date' />
        <textarea className='info-input' cols='30' rows='10' placeholder='Job Description'></textarea>
      </div>
    </>
  )
}

export default Work_Info