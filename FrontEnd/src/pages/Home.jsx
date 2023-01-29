import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import UserType from '../components/UserType'

const Home = () => {
  return (
    <div className="flex flex-col h-full px-10">
      <Header link="/login" text="Login"/>
      <UserType/>
    </div>
  )
}

export default Home