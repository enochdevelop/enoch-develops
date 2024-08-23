import React from 'react';
import './App.css';
import './Dropdown.css'
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import user from './assets/img/user.png';
import work from './assets/img/edit.png';

function MenuButton() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    return(
        <div className="menu_container" ref={menuRef}>
            <div className='menu_trigger' onClick={()=>{setOpen(!open)}}>
                <div className='logo_icon'>
                 <label>  {/* <input type="checkbox" name =""  className='input_section'/> */}
                    <div className="bar">
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>
                    </label> 
                </div>
            </div>

            <div className={`dropdown_menu ${open? 'active' : 'inactive'}`}>
                <h2>EnochDevelops<br/><span>menu</span></h2>
                <ul>
                    <DropdownItem tag={Link} href="/AboutMe" img = {user} text = {"About"}/>
                    <DropdownItem tag={Link} href="/ArProjects" img = {work} text = {"Work"}/>
                </ul>
            </div>
        </div>
    )
    
}

function DropdownItem(props){
    return(
        <li className = 'dropdown_item'>
            <img src={props.img} alt=""></img>
            <a href={props.href} className="link_decoration"> {props.text} </a>
        </li>
    );
}

export default MenuButton;
