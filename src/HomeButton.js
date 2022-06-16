import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function HomeButtonLink() {
    return(
            <div className="ProjectType">
                <Link to="/" className="button_link">
                    <p className='AboutMeParagragh'>Home</p>
                </Link>
            </div>
    )
}

export default HomeButtonLink;