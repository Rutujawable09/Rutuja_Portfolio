import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Profile from './component/profile/Profile'
import About from './component/About/About'
import Service from './component/services/Service'
import Mywork from './component/Mywork/Mywork'
import Contect from './component/contact/Contect'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Service />
      <Mywork />
      <Contect />
      <Footer />
    </div>
  )
}

export default App
