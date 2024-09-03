const Section_Head = (props) => {
    const toggleSection = (e) => {
        console.log(e.target.firstChild)
        e.target.firstChild.style.transform == 'rotate(270deg)' ? e.target.firstChild.style.transform = 'rotate(90deg)' : e.target.firstChild.style.transform = 'rotate(270deg)'
        
        if (e.target.parentNode.parentNode.parentNode.style.maxHeight) {
            e.target.parentNode.parentNode.parentNode.style.maxHeight = null
        } else {
            e.target.parentNode.parentNode.parentNode.style.maxHeight = 'calc(' + e.target.parentNode.parentNode.parentNode.scrollHeight + 'px + 350px)'
        }
    }

    const toggleDisplay = () => {
        if (props.display == true) {
            props.setDisplay(false)
        } else { 
            props.setDisplay(true)
        }
    }

    return (
        <div className='info-head'>
            <h2 className='info-title'>{props.section_title}</h2>

            <div className='ih-btns'>
                {props.display != 'xincpot' &&
                    <div>
                        <button type='button' onClick={toggleDisplay} className='collapse' style={{display: props.display ? 'block' : 'none'}}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#000000' viewBox='0 0 24 24'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'></path></g></svg>
                        </button>

                        <button type='button' onClick={toggleDisplay} className='collapse' style={{display: props.display ? 'none' : 'block'}}>
                            <svg fill='#000000' height='20' width='20' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xmlSpace='preserve'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <g> <g> <path d='M256,192c-35.29,0-64,28.71-64,64s28.71,64,64,64s64-28.71,64-64C320,220.71,291.29,192,256,192z M256,282.667 c-14.727,0-26.667-11.939-26.667-26.667s11.939-26.667,26.667-26.667s26.667,11.939,26.667,26.667S270.727,282.667,256,282.667z'></path> </g> </g> <g> <g> <path d='M508.806,246.409C471.641,196.787,369.67,96.538,256,96.538c-105.586,0-207.008,88.723-252.806,149.871 c-4.258,5.685-4.258,13.498,0,19.183C40.359,315.213,142.33,415.462,256,415.462c105.586,0,207.008-88.723,252.806-149.871 C513.065,259.906,513.065,252.094,508.806,246.409z M256,352c-52.934,0-96-43.066-96-96c0-52.934,43.066-96,96-96 c52.934,0,96,43.066,96,96C352,308.934,308.934,352,256,352z'></path> </g> </g> </g></svg>
                        </button>
                    </div> 
                }

                <button type='button' onClick={toggleSection} className='collapse'>
                    <svg className='clep' fill='#000000' height='20' width='20' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 330 330' xmlSpace='preserve' transform='rotate(90)'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <g id='XMLID_2_'> <path id='XMLID_4_' d='M145.606,74.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l69.393,69.392 l-69.393,69.395c-5.858,5.858-5.858,15.355,0,21.213C127.322,258.536,131.161,260,135,260s7.678-1.464,10.606-4.394l80-80.002 c2.814-2.813,4.394-6.628,4.394-10.607c0-3.979-1.58-7.794-4.394-10.607L145.606,74.393z'></path> <path id='XMLID_5_' d='M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z'></path> </g> </g></svg>
                </button>
            </div>
        </div>
    )
}

export default Section_Head