import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function HomeButtonLink() {
    return(
            <div className="button_div_link">
                <Link to="/" className="button_link">
                    <p>Home</p>
                </Link>
            </div>
    )
}

export default HomeButtonLink;