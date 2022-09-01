import React from 'react';
import {HashLink} from "react-router-hash-link";
export default function Footer(){
return(
    <footer>
        <span className='footer-logo'>eBilet</span>
        <div className='footer-information'>
                <span className='footer-information-text'><HashLink to='/#section-howtobuy'>Jak kupić eBilet?</HashLink></span>
                <span className='footer-information-text'><HashLink to='/#section-benefits'>Korzyści z eBiletu</HashLink></span>
                <span className='footer-information-text'><HashLink to='/#section-aboutUs'>O nas</HashLink></span>
                <span className='footer-information-text'><HashLink to='/#section-opinions'>Opinie klientów</HashLink></span>
        </div>
    </footer>
)
}
