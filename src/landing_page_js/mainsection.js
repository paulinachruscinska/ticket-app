import React from 'react';
import {Link} from 'react-router-dom';
export default function MainSection(){
    return(
        <section className='section-main'>
            <h1>Noś swój bilet w smartfonie</h1>
            <p>Oszczędź czas, ceń wygodę i dbaj o środowisko</p>
            <button className='button-main-section'><Link to='/buyticket/choosecity' className='a-header'>Kup <span>eBilet</span></Link></button>
        </section>
    )
}
