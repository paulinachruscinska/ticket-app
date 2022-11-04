import React from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import links from "../objects/links";

export default function Header(){
    return(
        <>
            <header>
                <span className='header-logo'><Link to='/'>eBilet</Link></span>
                <div className='header-items'>
                    <nav className='navbar' >
                        <input type='checkbox' className='header-items--navigation'/>
                        <ul className='navItems'>
                            {links.map( link=>{
                            return (
                                <li key={link.id} className='navItem'>
                                    <HashLink to={link.link} className='a-header-text'>{link.text}</HashLink>
                                </li>
                            )
                            })}
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}