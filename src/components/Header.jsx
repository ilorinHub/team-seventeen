import React from 'react'
import Button from './Button'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="w-full flex py-5 justify-between navbar items-center ">
      <Link to="/">
        <img src={logo} alt="carefara"  />
      </Link>
        <Button properties={props}/>
    </nav>
  )
}

export default Header