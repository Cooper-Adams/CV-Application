import React from 'react'

const Render_Volunteer = (props) => {
    return (
        <>
            <h2>VOLUNTEER EXPERIENCE</h2>
            <div className='cv-technical-skills'>
                {Object.entries(props).map(([key, value]) => {
                    <p key={key} className='cv-interests-text'>
                        {value}
                    </p>
                })}
            </div>
        </>
    )
}

export default Render_Volunteer