import React from 'react'
import './pageSelectActive.css'

const PageSelelectActive = ( { text }) => {

  return (
    <div className='page-select-active'> 
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  )
}

export default PageSelelectActive