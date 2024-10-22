import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Security Technician</title>
        <meta property="og:title" content="National Security Technician" />
      </Helmet>
    </div>
  )
}

export default Home
