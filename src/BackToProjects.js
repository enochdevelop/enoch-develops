import React from 'react';
import './App.css';
import './Dropdown.css'
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import user from './assets/img/user.png';
import work from './assets/img/edit.png';
import home from './assets/img/home.png';
import logo from './assets/EnochDevelopsLogo.png';

function BackToProjects() {
 
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        // Open the menu when mouse enters the menu container
        let handleMouseEnter = () => setOpen(true);

        // Close the menu when mouse leaves the entire menu area
        let handleMouseLeave = (e) => {
            if (!menuRef.current.contains(e.relatedTarget)) {
                setOpen(false);
            }
        };

        let menuElement = menuRef.current;
        if (menuElement) {
            menuElement.addEventListener("mouseenter", handleMouseEnter);
            menuElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (menuElement) {
                menuElement.removeEventListener("mouseenter", handleMouseEnter);
                menuElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="menu_container" ref={menuRef}>
            <div className='menu_trigger'>
                <div className='logo_icon'>
                    <label>
                        <div className="bar">
                            <span className="top"></span>
                            <span className="middle"></span>
                            <span className="bottom"></span>
                        </div>
                    </label>
                </div>
            </div>

            <div className={`dropdown_menu ${open ? 'active' : 'inactive'}`}>
                <div className='menu_title'>
                    <h2>EnochDevelops<br/><span>menu</span></h2>
                </div>
                
                <ul>
                    <DropdownItem tag={Link} href="/" img={home} text={"Home"} />
                    <DropdownItem tag={Link} href="/ArProjects" img={work} text={"Work"} />
                </ul>
            </div>
        </div>
    );
}

function DropdownItem(props){
    return(
        <li className = 'dropdown_item'>
            <img src={props.img} alt=""></img>
            <a href={props.href} className="link_decoration"> {props.text} </a>
        </li>
    );
}

export default BackToProjects;
