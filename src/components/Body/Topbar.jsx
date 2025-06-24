import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Topbar.css"

function Topbar() {
  return (
    <>
    <div className='topbar' >
        <div className="logo">
        <img src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo2MCwidyI6MTI1MCwiZnMiOjQ4LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SEFSU0hBRCBCSE9TQUxF/madrigal.png
" alt="" />
        </div>
            <ul>
            <NavLink to="/">
                <li>Home</li>
                </NavLink>
            <NavLink to="/skill">
                <li>Skills</li>
                </NavLink>
                <NavLink to="/work">
                <li>Work</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contact</li>
                  </NavLink>
                    <li>
                      <a 
                        href="/HarshadBhosale_Developer_2yrs_Experience.pdf" 
                         rel="noopener noreferrer" 
                        target="_blank" 
                        className="resume-btn"
                      >
                        View Resume
                      </a>
                    </li>  
            </ul>
            

    </div>
    </>
  )
}

export default Topbar