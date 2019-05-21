import React from 'react';
import { NavLink } from "react-router-dom"
import './Nav.css'
import logo from '../../Static/Blog-Logo.svg'

function Nav() {
  return(
    <nav style={{ opacity: 0}}>
      <NavLink to ="/"><img src={logo} id="logo" alt="Blog-Logo"/></NavLink>
      <ul>
        <li><NavLink to ="/articles" className="link">文章列表</NavLink></li>
        <li><NavLink to ="/collection" className="link">作品/經歷</NavLink></li>
        <li><NavLink to ="/about" className="link">關於我</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav
