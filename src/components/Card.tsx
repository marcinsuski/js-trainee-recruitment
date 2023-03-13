import React, {Fragment} from 'react'
import classes from './Card.module.css'

const Card: React.FC = (props: React.ReactNode) => {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card