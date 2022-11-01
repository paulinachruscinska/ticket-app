import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export default function MainSection(){
    return(
        <Carousel autoPlay interval='3000' infiniteLoop showStatus={false} showThumbs={false}>
            <section className='section-main'>
                <h1>Noś swój bilet w smartfonie</h1>
                <p>Oszczędź czas, ceń wygodę i dbaj o środowisko</p>
                <button className='button-main-section'><Link to='/buyticket/choosecity' className='a-header'>Kup <span>eBilet</span></Link></button>
            </section>
            <section className='section-main' id='slide2'>
                <h1>Nie trać czasu na stanie w kolejkach</h1>
                <p>Ułatw sobie życie</p>
            </section>
            <section className='section-main' id='slide3'>
                <h1>Zamawiaj skąd tylko chcesz</h1>
                <p>Spróbuj już teraz</p>
                <button className='button-main-section'><Link to='/buyticket/choosecity' className='a-header'>Kup <span>eBilet</span></Link></button>
            </section>
        </Carousel>
    )
}
