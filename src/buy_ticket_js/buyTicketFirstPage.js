import React, {useState} from 'react';
import Header from "../landing_page_js/header";
import Footer from "../landing_page_js/footer";
import {useNavigate} from 'react-router-dom';


export default function BuyTicket1({cities, addCity, allCity}){
    const [chooseCity, setChooseCity] = useState('blabla')
    let navigate = useNavigate();
    return(
        <>
            <Header/>
            <section className='section-choose-city'>
                <h1>Wybierz miasto</h1>
                <div className='cities' >
                    {cities.map(function(city){
                        return(
                            <div
                                onClick={()=>{
                                    setChooseCity(city.city); // czemu ta funkcja nie działa?
                                    if(typeof addCity === 'function'){
                                        addCity(chooseCity);
                                        navigate(city.link);
                                    } else {
                                        throw new Error('to nie jest funkcja')
                                    }
                                }}
                                className='city' key={city.id}
                            >
                                    <img src={city.img} alt='logo-city'/>
                                    <p className='city-name'>{city.city}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer/>
        </>
    )
}