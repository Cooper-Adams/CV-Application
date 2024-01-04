import React, { useState } from 'react'
import JsPDF from 'jspdf'
import './styles/CV_App.css'
import { nanoid } from 'nanoid'
import Personal_Info from './components/Personal_Info'
import Contact_Info from './components/Contact_Info'
import Work_Info from './components/Work_Info'
import Education_Info from './components/Education_Info'
import Form_Modification from './components/Form_Modification'
import Technical_Skills from './components/Technical_Skills'
import Soft_Skills from './components/Soft_Skills'
import Other_Info from './components/Other_Info'
import Render_Personal from './components/Render_Personal'
import Render_Professional from './components/Render_Professional'
import Render_Education from './components/Render_Education'
import Render_TechnicalSkills from './components/Render_TechnicalSkills'
import Render_SoftSkills from './components/Render_SoftSkills'
import Render_Other from './components/Render_Other'

function CV_App () {
  const [formData, setFormData] = useState({
      personalInfo: {
        fullName: '',
        title: '',
        description: '',
      },
      contactInfo: {
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        website: '',
      },
      educationInfo: [],
      experienceInfo: [],
      technicalSkills: [],
      softSkills: [],
      otherCatL: [],
      otherCatR: []
    },
  )

  const wipeFormData = () => {
    setFormData({
      personalInfo: {
        fullName: '',
        title: '',
        description: '',
      },
      contactInfo: {
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        website: '',
      },
      educationInfo: [],
      experienceInfo: [],
      technicalSkills: [],
      softSkills: [],
      volunteerInfo: [],
      interests: []
    })
  }

  const generatePDF = () => {
    const pdf = new JsPDF('portrait', 'pt', 'a4')
    pdf.html(document.querySelector('#cv-pdf')).then(() => {
        pdf.save('NewCV.pdf')
    })
  }

  const personalInfoChange = (e) => {
    const {name, value} = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      personalInfo: {
        ...prevFormData.personalInfo,
        [name]: value,
      },
    }))
  }

  const contactInfoChange = (e) => {
    const {name, value} = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      contactInfo: {
        ...prevFormData.contactInfo,
        [name]: value,
      },
    }))
  }

  const otherCatChange = (e, type) => {
    e.preventDefault()
  
    const form = e.target.closest('form')

    const newInfo = [...form.querySelectorAll('input')]
      .map((inputField) => ({
        [inputField.name]: inputField.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }))

    const addlInfo = [
      ...form.querySelectorAll('.extra-info'),
    ].map((newEl) => ({ id: newEl.id, content: newEl.textContent }))

    if (type == 'technicalSkills' || type == 'otherCatL' || type == 'otherCatR') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [type]: [
          ...prevFormData[type],
          {
            ...newInfo,
            id: nanoid(),
            additionalInfo: addlInfo,
          },
        ],
      }))
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [type]: addlInfo
      }))
    }
  }

  const deleteOtherCat = (id, type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: prevFormData[type].filter((item) => item.id !== id)
    }))
  }

  return (
    <>
      <div className='cv-input'>
        <Form_Modification
          wipeFormData={wipeFormData}
          generatePDF={generatePDF}
        />
        <Personal_Info
          formData={formData.personalInfo}
          personalInfoChange={personalInfoChange}
        />
        <Contact_Info
          formData={formData.contactInfo}
          contactInfoChange={contactInfoChange}
        />
        <Work_Info
          formData={formData.experienceInfo}
          otherCatChange={otherCatChange}
          deleteOtherCat={deleteOtherCat}
        />
        <Education_Info
          formData={formData.educationInfo}
          otherCatChange={otherCatChange}
          deleteOtherCat={deleteOtherCat}
        />
        <Technical_Skills
          formData={formData.technicalSkills}
          otherCatChange={otherCatChange}
          deleteOtherCat={deleteOtherCat}
        />
        <Soft_Skills
          formData={formData.softSkills}
          otherCatChange={otherCatChange}
          deleteOtherCat={deleteOtherCat}
        />
        <Other_Info
          formData={formData.otherCatL.concat(formData.otherCatR)}
          otherCatChange={otherCatChange}
          deleteOtherCat={deleteOtherCat}
        />
      </div>

      <div className="right-panel">
        <div className='cv-preview' id='cv-pdf'>
          <div className='cv-section personal'>
            <Render_Personal formData = {formData.personalInfo} />
          </div>
          
          <div className="cv-section below-head">
            <div className="cv-section bh-left">
              <div className='cv-section bhs'>
                <Render_Professional  formData = {formData.experienceInfo} />
              </div>

              <div className='cv-section bhs'>
                <Render_Education formData = {formData.educationInfo} />
              </div>

              <div className='cv-section bhs'>
                <Render_Other formData = {formData.otherCatL} />
              </div>
            </div>

            <div className="cv-section bh-right">
              <div className='cv-section bhs'>
                <Render_TechnicalSkills formData = {formData.technicalSkills} />
              </div>

              <div className='cv-section bhs'>
                <Render_SoftSkills formData = {formData.softSkills} />
              </div>

              <div className='cv-section bhs'>
                <Render_Other formData = {formData.otherCatR} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CV_App