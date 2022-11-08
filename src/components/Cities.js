import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Cities({cities, addCity}){
    let navigate = useNavigate();
    return(
            <section className='section-choose-city'>
                <h1>Wybierz miasto</h1>
                <div className='cities' >
                    {cities.map(function(city){
                        return(
                            <div
                                onClick={()=>{
                                    if(typeof addCity === 'function'){
                                        addCity(city.city);
                                        navigate(city.link);
                                    } else {
                                        throw new Error('to nie jest funkcja')
                                    }
                                }}
                                className='city' key={city.id}>
                                    <img src={city.img} alt='logo-city'/>
                                    <p className='city-name'>{city.city}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
    )
}