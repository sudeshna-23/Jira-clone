import React from 'react'
import './Backlog.css'
import Filter from '../../components/ui/filter/Filter'

function Backlog() {
  return (
    <div className="backlog-page">
        <div className="backlog-head">
            <h1>Heading</h1>
            <button className='add-button'>Add</button>
        </div>
        <Filter/>
    </div>
  )
}

export default Backlog
