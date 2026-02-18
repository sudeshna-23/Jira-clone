import React from 'react'
import "./SidePanel.css"

function SidePanel() {
  return (
    <nav>
        <div className="nav-items">
            <img src="../../../../public/boards.svg" alt="boards-logo" />
            <span>Boards</span>
        </div>
        <div className="nav-items">
            <img src="../../../../public/backlog.svg" alt="backlog-logo" />
            <span>Backlogs</span>
        </div>
    </nav>
  )
}

export default SidePanel
