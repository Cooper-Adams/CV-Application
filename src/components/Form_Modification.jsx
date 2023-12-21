import React from 'react'

const Form_Modification = (props) => {
  const clearForm = () => { props.wipeFormData() }
  const downloadCV = () => { props.generatePDF() }

  return (
    <>
      <div className='form-mod'>
        <div className='modification-btn' onClick={clearForm}><span>Clear CV</span></div>
        <div className='modification-btn' onClick={downloadCV}><span>Download</span></div>
      </div>
    </>
  )
}
  
export default Form_Modification