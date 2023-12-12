import React from 'react'

const Render_Professional = (props) => {
    return (
        <>
            <div className='cv-name-desc'>
                {Object.entries(props).map(([key, value]) => {
                    if (key == 'fullName') {
                        return (
                            <h1 key={key} className='cv-title-h1'>
                                {value}
                            </h1>
                        )
                    } else if (key == 'title') {
                        return (
                            <h3 key={key} className='cv-title-h3'>
                                {value}
                            </h3>
                        )
                    } else if (key == 'description') {
                        return (
                            <p key={key} className='cv-desc-p'>
                                {value}
                            </p>
                        )
                    }
                })}
            </div>

            <div className='cv-contacts'>
                {Object.entries(props).map(([key, value]) => {
                    if (key == 'address') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {value}
                            </p>
                        )
                    } else if (key == 'email') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {value}
                            </p>
                        )
                    } else if (key == 'phone') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {value}
                            </p>
                        )
                    } else if (key == 'linkedin') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {value}
                            </p>
                        )
                    } else if (key == 'website') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {value}
                            </p>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Render_Professional