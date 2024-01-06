import React from 'react'

const Render_Personal = (props) => {
    return (
        <>
            <div className='cv-name-desc'>
                <h2 className='cv-title-h1'>
                    {props.personalInfo.fullName || 'Your Name'}
                </h2>

                <h3 className='cv-title-h3'>
                    {props.personalInfo.title || 'Professional Title'}
                </h3>

                <p className='cv-desc-p'>
                    {props.personalInfo.description || 'Description detailing your general skillset and abilities.'}
                </p>
            </div>

            <div className='cv-contacts'>
                <div className="cv-contact-div">
                    <p className='cv-contact-p'>
                        {props.contactInfo.email || 'email@gmail.com'}
                    </p>
                </div>

                <div className="cv-contact-div">
                    <p className='cv-contact-p'>
                        {props.contactInfo.phone || '123-456-789'}
                    </p>
                </div>

                <div className="cv-contact-div">    
                    <p className='cv-contact-p'>
                        {props.contactInfo.address || 'City, State'}
                    </p>
                </div>

                
                <div className="cv-contact-div">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 50 50" className='fill-blue'>
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                    
                    <p className='cv-contact-p'>
                        {props.contactInfo.linkedin || 'linkedin.com/your-profile'}
                    </p>
                </div>

                <div className="cv-contact-div">
                    <p className='cv-contact-p'>
                        {props.contactInfo.website || 'github.com/your-profile'}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Render_Personal