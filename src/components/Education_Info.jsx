import React, { useState } from 'react'

const Education_Info = (props) => {
  return (
    <>
      <div className='info-div'>
        <h2>Education</h2>
        <input className='info-input' type='text' placeholder='School Name' />
        <input className='info-input' type='text' placeholder='Title of Degree' />
        <input className='info-input' type='text' placeholder='Start Date (MM/YYYY)' />
        <input className='info-input' type='text' placeholder='End Date' />
      </div>
    </>
  )
}

export default Education_Info