import React from 'react'
import { Link } from "react-router-dom";

const MainPageHeader = () => {
  return (
    <div className='main_page_header'>

            <a className='main_page_header_text' tag={Link} href="/AboutMe" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                <p>ABOUT</p>
            </a>
            <a className='main_page_header_text' tag={Link} href="/ArProjects" style={{textDecoration: "none", cursor: "default", color: "inherit"}}>
                <p>WORK</p>
            </a>
    </div>
  )
}

export default MainPageHeader
