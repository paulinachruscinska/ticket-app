import React from 'react';
import Header from "../landing_page_js/header";
import Footer from "../landing_page_js/footer";
import {Link} from 'react-router-dom';


export default function BuyTicket1({cities}){
    return(
        <>
            <Header/>
            <section className='section-choose-city'>
                <h1>Wybierz miasto</h1>
                <div className='cities'>
                    {cities.map(function(city){
                        return(
                            <div className='city' key={city.id}>
                                <Link to={city.link}>
                                    <img src={city.img}/>
                                    <p className='city-name'>{city.city}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </>
    )
}