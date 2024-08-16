import { nanoid } from 'nanoid'
import React from 'react'

const Render_Other = (props) => {
    const otherCatRender = props.formData.map(cat => {
        return ( <>
            <h5 key={nanoid()}>{cat.title.toUpperCase()}</h5>
            
            <div key={nanoid()} className='fp-inner-div'>
                <ul className='fp-inner-ul'>
                    {cat.additionalInfo.map((skill) => (
                        <li key={nanoid()} className='fp-inner-li'>
                            <p className='fp-inner-p'>{skill.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>)
    })

    return (
        <>
            {otherCatRender}
        </>
    )
}

export default Render_Other