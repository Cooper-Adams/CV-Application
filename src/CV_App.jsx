import React, { useState } from 'react'
import JsPDF from 'jspdf'
import Personal_Info from './components/Personal_Info'
import Education_Info from './components/Education_Info'
import Work_Info from './components/Work_Info'
import Form_Modification from './components/Form_Modification'
import './styles/CV_App.css'
import Technical_Skills from './components/Technical_Skills'
import Soft_Skills from './components/Soft_Skills'
import Render_Personal from './components/Render_Personal'
import Render_Professional from './components/Render_Professional'
import Render_Education from './components/Render_Education'
import Render_TechnicalSkills from './components/Render_TechnicalSkills'
import Render_SoftSkills from './components/Render_SoftSkills'
import Render_Volunteer from './components/Render_Volunteer'
import Render_Interests from './components/Render_Interests'
import Contact_Info from './components/Contact_Info'

function CV_App () {
  const [personalForm, setPersonalForm] = useState([])
  const [contactForm, setContactForm] = useState([])
  const [educationForm, setEducationForm] = useState([])
  const [professionalForm, setProfessionalForm] = useState([])
  const [technicalSkills, setTechnicalSkills] = useState([])
  const [softSkills, setSoftSkills] = useState([])
  const [volunteerExperience, setVolunteerExperience] = useState([])
  const [interests, setInterests] = useState([])

  const wipeFormData = () => {
    setPersonalForm({fullName: '', title: '', description: ''})
    setContactForm({email: '', phone: '', address: '', linkedin: '', website: ''})
    setEducationForm({schoolName: '', degree: '', schoolStart: '', schoolFinish: ''})
    setProfessionalForm({companyName: '', jobTitle: '', startDate: '', finishDate: '', jobDescription: ''})
  }

  const generatePDF = () => {
    const pdf = new JsPDF('portrait', 'pt', 'a4')
    pdf.html(document.querySelector('#cv-pdf')).then(() => {
        pdf.save('NewCV.pdf')
    })
  }

  const saveSkillsArray = (skills, type) => {
    switch (type) {
      case 'technical':
        setTechnicalSkills(skills)
        break
      case 'soft':
        setSoftSkills(skills)
        break
      case 'volunteer':
        setVolunteerExperience(skills)
        break
      case 'interests':
        setInterests
        break
    }
  }

  const saveFormInput = (formData) => {
    switch (formData.form) {
      case 'personal-form':
        setPersonalForm(formData)
        break
      case 'contact-form':
        setContactForm(formData)
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
          generatePDF={generatePDF}
        />
        <Personal_Info
          personalForm={personalForm}
          saveFormInput={saveFormInput}
        />
        <Contact_Info
          contactForm={contactForm}
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
        <Soft_Skills
          saveSkillsArray={saveSkillsArray}
        />
      </div>

      <div className="right-panel">
        <div className='cv-preview' id='cv-pdf'>
          <div className='cv-section personal'>
            <Render_Personal props = {personalForm} />
          </div>
          
          <div className="cv-section below-head">
            <div className="cv-section bh-left">
              <div className='cv-section professional'>
                <Render_Professional  props = {professionalForm} />
              </div>

              <div className='cv-section education'>
                <Render_Education props = {professionalForm} />
              </div>
            </div>

            <div className="cv-section bh-right">
              <div className='cv-section technical-skills'>
                <Render_TechnicalSkills props = {technicalSkills} />
              </div>

              <div className='cv-section soft-skills'>
                <Render_SoftSkills props = {softSkills} />
              </div>

              <div className='cv-section volunteer'>
                <Render_Volunteer props = {volunteerExperience} />
              </div>

              <div className='cv-section interests'>
                <Render_Interests props = {interests} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CV_App