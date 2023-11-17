// import '../App.scss'
import About from '../pages/About'
import Art from '../pages/Art'
import Software from '../pages/Software'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function NavBar() {
    return (
     <Router>
        <div className='navigation-rail'>
            <Link to="/" className='nav-item' role="tab" > About
                {/* <div className='rotated-text'>About</div> */}
            </Link>
            <Link to='/art' className='nav-item' role="tab">Art
                {/* <div className='rotated-text'>Art</div> */}
            </Link>
            <Link to='/software' className='nav-item'        role="tab">Software
                {/* <div className='rotated-text'>Software</div> */}
            </Link>

        <Routes>
          <Route path='/software' element={<Software />} />
          <Route path='/art' element={<Art />}/>
          <Route exact path='/' element={<About/>}/>
        </Routes>
        </div>
     </Router>
    )
  }
  