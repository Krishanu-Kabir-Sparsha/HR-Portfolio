import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<ResumePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
