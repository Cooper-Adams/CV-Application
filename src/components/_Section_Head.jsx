const Section_Head = (props) => {
    const toggleSection = (e) => {
        e.target.firstChild.style.transform == 'rotate(270deg)' ? e.target.firstChild.style.transform = 'rotate(90deg)' : e.target.firstChild.style.transform = 'rotate(270deg)'
        
        if (e.target.parentNode.parentNode.style.maxHeight) {
            e.target.parentNode.parentNode.style.maxHeight = null
        } else {
            e.target.parentNode.parentNode.style.maxHeight = 'calc(' + e.target.parentNode.parentNode.scrollHeight + 'px + 350px)'
        }
    }

    return (
        <div className='info-head'>
            <h2 className='info-title'>{props.section_title}</h2>

            <button type='button' onClick={toggleSection} className='collapse'>
                <svg className='clep' fill='#000000' height='20' width='20' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 330 330' xmlSpace='preserve' transform='rotate(90)'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <g id='XMLID_2_'> <path id='XMLID_4_' d='M145.606,74.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l69.393,69.392 l-69.393,69.395c-5.858,5.858-5.858,15.355,0,21.213C127.322,258.536,131.161,260,135,260s7.678-1.464,10.606-4.394l80-80.002 c2.814-2.813,4.394-6.628,4.394-10.607c0-3.979-1.58-7.794-4.394-10.607L145.606,74.393z'></path> <path id='XMLID_5_' d='M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z'></path> </g> </g></svg>
            </button>
        </div>
    )
}

export default Section_Head