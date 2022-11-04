import React from 'react';
import {HashLink} from "react-router-hash-link";
import links from "../objects/links";
export default function Footer(){
return(
    <footer>
        <span className='footer-logo'>eBilet</span>
        <div className='footer-information'>
                {links.map(link=>{
                        return(
                            <span key={link.id} className='footer-information-text'>
                                    <HashLink to={link.link}>{link.text}</HashLink>
                            </span>
                        )
                })}
        </div>
    </footer>
)
}
