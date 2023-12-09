import React, { useState } from 'react'

const Form_Modification = (props) => {
    const clearForm = () => { props.wipeFormData() }

    return (
      <>
        <div className='info-div'>
          <div className='info-head'>
            <div className='modification-btn'><span>Load Example</span></div>
            <div className='modification-btn' onClick={clearForm}><span>Clear CV</span></div>
          </div>
        </div>
      </>
    )
  }
  
  export default Form_Modification