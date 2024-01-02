import React from 'react'

const Render_SoftSkills = (props) => {
    const softSkillRender = props.formData.map((skill) => (        
        <span key={skill} className='fp-inner-span'>{skill.content}</span>
    ))

    return (
        <>
            <h5>SOFT SKILLS</h5>

            <div className='fp-inner-div fp-soft'>
                {softSkillRender}
            </div>
        </>
    )
}

export default Render_SoftSkills