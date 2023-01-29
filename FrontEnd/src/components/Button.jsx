import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.properties.link}>
      <div  className="bg-emerald rounded px-5
        py-2 text-bold drop-shadow-xs text-sm font-bold">{props.properties.text}
    </div>
    </Link>
  )
}

export default Button