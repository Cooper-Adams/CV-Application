import React, { useState } from 'react'
import Personal_Info from './components/Personal_Info'
import Education_Info from './components/Education_Info'
import Work_Info from './components/Work_Info'
import Form_Modification from './components/Form_Modification'
import Live_Preview from './components/CV_Preview'
import './styles/CV_App.css'

function CV_App () {
  const [personalForm, setPersonalForm] = useState([])
  const [educationForm, setEducationForm] = useState([])
  const [professionalForm, setProfessionalForm] = useState([])

  const wipeFormData = () => {
    setPersonalForm({firstName: '', lastName: '', email: '', phone: '', address: '', fileName: ''})
    setEducationForm({schoolName: '', degree: '', schoolStart: '', schoolFinish: ''})
    setProfessionalForm({companyName: '', jobTitle: '', startDate: '', finishDate: '', jobDescription: ''})
  }

  const exampleFormData = () => {
    /* Insert logic to populate the CV display with example data */
  }

  const generatePDF = () => {
    /* Insert logic to generate and download a PDF of the CV*/
  }

  const saveFormInput = (formData) => {
    switch (formData.form) {
      case 'personal-form':
        setPersonalForm(formData)
        break
      case 'education-form':
        setEducationForm(formData)
        break
      case 'professional-form':
        setProfessionalForm(formData)
        break
    }
  }

  return (
    <>
      <div className="cv-input">
        <Form_Modification
          wipeFormData={wipeFormData}
          exampleFormData={exampleFormData}
          generatePDF={generatePDF}
        />
        <Personal_Info
          saveFormInput={saveFormInput}
        />
        <Education_Info 
          saveFormInput={saveFormInput}
        />
        <Work_Info 
          saveFormInput={saveFormInput}
        />
      </div>

      <div className="cv-preview">
        <Live_Preview
          personalForm={personalForm}
          educationForm={educationForm}
          professionalForm={professionalForm}
        />
      </div>
    </>
  )
}

export default CV_App