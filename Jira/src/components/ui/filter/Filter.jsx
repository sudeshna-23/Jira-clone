import './Filter.css'
import React from 'react'

function Filter() {
  return (
    <div className='filter-box'>
        <div className="left-content">
            <img src="../../../../public/filter.png" alt="" className='icon'/>
            <input type="text" className='input-box' placeholder='Filter by keyword'/>
        </div>
        <div>
            dropdown
        </div>
    </div>
  )
}

export default Filter
