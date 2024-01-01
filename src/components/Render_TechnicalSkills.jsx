import React from 'react'

const Render_TechnicalSkills = (props) => {
    const techSkillRender = props.formData.map((skillCat) => (
        <div className='fp-inner-div'>
            <h5 className='fp-inner-header'>{skillCat.title}</h5>
            <ul className='fp-inner-ul'>
                {skillCat.additionalInfo.map((skill) => (
                    <li className='fp-inner-li'>
                        <p className='fp-inner-p'>{skill.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    ))

    return (
        <>
            <h5>TECHNICAL SKILLS</h5>

            {techSkillRender}
        </>
    )
}

export default Render_TechnicalSkills