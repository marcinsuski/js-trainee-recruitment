import React from 'react'
import classes from './SidebarMenu.module.css'

const SidebarMenu = () => {
  return (
    <div className={classes.sidebarwrapper}>
      <h2>Your new gag</h2>
      <ul>
        <li><a>Polar Bear</a></li>
        <li><a>Panda</a></li>
        <li><a>Fox</a></li>
        <li><a>Squirrel</a></li>
        <li><a>Butterfly</a></li>
        <li><a>Elephant</a></li>
      </ul>
    </div>
  )
}

export default SidebarMenu