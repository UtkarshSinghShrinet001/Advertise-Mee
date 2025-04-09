import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Header from './Components/Header'
import Home from './Home'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Agencies from './agencies'
import Ageninfo from './Ageninfo'
// import LoginSignupAdmin from './Components/LoginSignup/LoginSignupAdmin';
import AddAgencyDetail from './addAgencyDetail';
import WhatsNew from './WhatsNew';
// import signin from './Components/signin';
// import signup from './Components/signup';
// import LoginSignup from './Components/LoginSignup/LoginSignup';
function App() {


  return (
    <>
    {/* <signin/> */}
    {/* <signup/> */}
    {/* < WhatsNew /> */}
        {/* < AddAgencyDetail />  */}
      <Router>
        {/* <Header /> */}
        <Routes>
        {/* <Route path="/" element={<signup />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<LoginSignupAdmin />} /> */}
          {/* <Route path="/" element={<LoginSignup />} /> */}
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/ageninfo" element={<Ageninfo />} />
          <Route path="/addAgency" element={< AddAgencyDetail />} /> 
          <Route path="/  AddAgencyDetail" element={< AddAgencyDetail  />} />
          <Route path="/WhatsNew" element={<WhatsNew />} />
          {/* <Route path="/signin" element={<WhatsNew />} /> */}

        </Routes>
        
      </Router>

    </>
  )
}

export default App
