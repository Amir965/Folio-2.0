import React from 'react'
import Header from "../header/index.js"
import Body from "../body/index.js"
import "./home.css"
import Footer from '../footer/index.js'
const Home = () => {
  return (
      <div className='home'>
          <div>
              <Header/>
          </div>
          <div>
              <Body/>
          </div>
          <div>
              <Footer/>
          </div>
    </div>
  )
}

export default Home;