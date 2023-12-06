import React, { useState } from 'react'
import Personal_Info from './components/Personal_Info'
import Education_Info from './components/Education_Info'
import Work_Info from './components/Work_Info'
import './styles/CV_App.css'

function CV_App () {
  const [personalForm, setPersonalForm] = useState([])
  const [educationForm, setEduForm] = useState([])
  const [professionalForm, setProfessionalForm] = useState([])

  const saveFormInput = (formData) => {
    switch (formData.form) {
      case 'personal-form':
        setPersonalForm(formData)
        break
      case 'education-form':
        //setEducationForm(formData)
        break
      case 'professional-form':
        //setProfessionalForm(formData)
        break
    }
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed")
  const toggleHidden = (e) => toggleValue(e, "isHidden")

  return (
    <>
      <div className="cv-input">
        {/* <Modify_Form /> */}
        <Personal_Info
          saveFormInput={saveFormInput}
          onChange={setPersonalForm}
        />
        <Education_Info />
        {/* <Work_Info /> */}
      </div>

      <div className="cv-preview">
        {/* <Live_Preview /> */}
      </div>
    </>
  )
}

export default CV_App