const toggleForm = (e) => {
    let inputSections = []
    let sibling = e.target.parentNode.parentNode.firstChild.nextSibling
    sibling.parentNode.classList.toggle('active')
    
    while (sibling) {
      if (sibling.classList.contains('info-section')) {
        inputSections.push(sibling)
      } sibling = sibling.nextSibling
    }
    
    inputSections.forEach(section => { section.classList.toggle('active')})  
}

export default toggleForm