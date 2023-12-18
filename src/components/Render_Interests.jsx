import React from 'react'

const Render_Interests = (props) => {
    return (
        <>
            <h2>INTERESTS</h2>
            <div className='cv-interests'>
                {Object.entries(props).map(([key, value]) => {
                    <p key={key} className='cv-interests-text'>
                        {value}
                    </p>
                })}
            </div>
        </>
    )
}

export default Render_Interests