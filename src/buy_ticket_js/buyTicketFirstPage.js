import React from 'react';
import Header from "../landing_page_js/header";
import Footer from "../landing_page_js/footer";
import {Link} from 'react-router-dom';


export default function BuyTicket1({cities, addCity, allCity}){
    const selectCity = (e) =>{
        e.preventDefault();
        if(typeof addCity === 'function'){
            addCity(e.currentTarget.id);
        } else {
            throw new Error('to nie jest funkcja')
        }
        console.log(allCity)

    }

    return(
        <>
            <Header/>
            <section className='section-choose-city'>
                <h1>Wybierz miasto</h1>
                <div className='cities'>
                    {cities.map(function(city){
                        return(
                            <div onClick={selectCity} className='city' key={city.id} id={city.city}>
                                <Link to={city.link}>
                                    <img src={city.img} alt='logo-city'/>
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