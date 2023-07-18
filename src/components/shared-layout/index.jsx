import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'

const SharedLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default SharedLayout