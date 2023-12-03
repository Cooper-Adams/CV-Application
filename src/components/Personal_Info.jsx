import React, { useState } from 'react'

const Personal_Info = (props) => {
  return (
    <>
        <div className='info-div'>
            <h2>Personal Information</h2>
            <input className='info-input' type='text' placeholder='First Name' />
            <input className='info-input' type='text' placeholder='Last Name' />
            <input className='info-input' type='email' placeholder='Email Address' />
            <input className='info-input' type='tel' placeholder='Phone Number' />
            <input className='info-input' type='text' placeholder='City, Country'/>
        </div>
    </>
  )
}

export default Personal_Info