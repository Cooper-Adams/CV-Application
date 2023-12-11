import React from 'react'

const Form_Modification = (props) => {
  const clearForm = () => { props.wipeFormData() }
  const loadForm = () => { props.exampleFormData() }
  const downloadCV = () => { props.generatePDF() }

  return (
    <>
      <div className='info-div'>
        <div className='info-head'>
          <div className='modification-btn' onClick={clearForm}><span>Clear CV</span></div>
          <div className='modification-btn' onClick={loadForm}><span>Load Example</span></div>
          <div className='modification-btn' onClick={downloadCV}><span>Download</span></div>
        </div>
      </div>
    </>
  )
}
  
export default Form_Modification