import React, { useState } from 'react'
import JsPDF from 'jspdf'
import Personal_Info from './components/Personal_Info'
import Education_Info from './components/Education_Info'
import Work_Info from './components/Work_Info'
import Form_Modification from './components/Form_Modification'
import './styles/CV_App.css'
import Technical_Skills from './components/Technical_Skills'
import Render_Personal from './components/Render_Personal'
import Render_Professional from './components/Render_Professional'
import Render_Education from './components/Render_Education'

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
    const pdf = new JsPDF('portrait', 'pt', 'a4')
    pdf.html(document.querySelector('#cv-pdf')).then(() => {
        pdf.save('NewCV.pdf')
    })
  }

  const saveSkillsArray = () => {
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
      <div className='cv-input'>
        <Form_Modification
          wipeFormData={wipeFormData}
          exampleFormData={exampleFormData}
          generatePDF={generatePDF}
        />
        <Personal_Info
          personalForm={personalForm}
          saveFormInput={saveFormInput}
        />
        <Work_Info
          professionalForm={professionalForm}
          saveFormInput={saveFormInput}
        />
        <Education_Info
          educationForm={educationForm}
          saveFormInput={saveFormInput}
        />
        <Technical_Skills
          saveSkillsArray={saveSkillsArray}
        />
      </div>

      <div className='cv-preview' id='cv-pdf'>
        <div className='cv-section personal'>
          <Render_Personal props = {personalForm} />
        </div>

        <div className='cv-section professional'>
          <Render_Professional  props = {professionalForm} />
        </div>

        <div className='cv-section education'>
          <Render_Education props = {professionalForm} />
        </div>
      </div>
    </>
  )
}

export default CV_App