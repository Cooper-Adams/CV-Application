import React from 'react'

const Render_Personal = (props) => {
    return (
        <>
            <div className='cv-name-desc'>
                {Object.entries(props.props).map(([key, value]) => {
                    if (key == 'fullName') {
                        return (
                            <h1 key={key} className='cv-title-h1'>
                                {props.props[key]}
                            </h1>
                        )
                    } else if (key == 'title') {
                        return (
                            <h3 key={key} className='cv-title-h3'>
                                {props.props[key]}
                            </h3>
                        )
                    } else if (key == 'description') {
                        return (
                            <p key={key} className='cv-desc-p'>
                                {props.props[key]}
                            </p>
                        )
                    }
                })}
            </div>

            <div className='cv-contacts'>
                {Object.entries(props.props).map(([key, value]) => {
                    if (key == 'address') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {props.props[key]}
                            </p>
                        )
                    } else if (key == 'email') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {props.props[key]}
                            </p>
                        )
                    } else if (key == 'phone') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {props.props[key]}
                            </p>
                        )
                    } else if (key == 'linkedin') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {props.props[key]}
                            </p>
                        )
                    } else if (key == 'website') {
                        return (
                            <p key={key} className='cv-contact-p'>
                                {props.props[key]}
                            </p>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Render_Personal