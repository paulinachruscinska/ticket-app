import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeOpinions({opinions}){
    return(
        <section className='section-opinions' id='section-opinions'>
            <h2>CO MÓWIĄ O NAS INNI?</h2>
            <h3>Wasze pozytywne słowa jeszcze bardziej nas motywują!</h3>
            <Carousel  onSwipeMove swipeable={true} autoPlay showStatus={false} showThumbs={false} infiniteLoop transitionTime='500' interval='3000'>
                {opinions.map(function(opinionItem){
                    return(
                        <div key={opinionItem.id} id={opinionItem.id} className='opinion'>
                            <p>{opinionItem.text}</p>
                            <div className='opinions-signature'>
                                <span className='photo'/>
                                <span>{opinionItem.signature}</span>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}