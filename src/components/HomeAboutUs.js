import React from 'react';
import {Carousel} from "react-responsive-carousel";

import img1 from '../images/train-solid.svg';
import img2 from '../images/train-tram-solid.svg';
import img3 from '../images/bus-solid.svg';

const vehiclesCarousel =[ {img: img1, alt: 'train', text: 'pociąg'}, {img: img2, alt: 'train', text: 'tramwaj'}, {img: img3, alt: 'train', text: 'pociąg'} ]
export default function HomeAboutUs(){
    return(
        <section className='section-aboutus'>
            <section className='aboutUs' id='section-aboutUs'>
                <div className='aboutUs-text'>
                    <h2>O NAS</h2>
                    <p>Stworzyliśmy aplikację eBilet,</p>
                    <span>ponieważ podróżujemy transportem publicznym. Jako pasażerowie chcieliśmy mieć łatwy dostęp do biletów.
                        Zawsze. Teraz wszyscy możemy kupować je szybko, bezpiecznie i wygodnie z nich korzystać. Wierzymy,
                        że dobry transport publiczny w mieście to lepsza jakość życia mieszkańców,
                        a wygodny zakup biletu to dobry początek.</span>
                </div>
            </section>
                <section className='vehicles'>
                    <h2>Środki transportu, jakimi możesz się poruszać</h2>
                    <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop interval='2000' transitionTime='500' width='300px' >
                        {vehiclesCarousel.map((vehicle, index)=>{
                            return(
                                <div key={index}>
                                    <img
                                        className='vehicle'
                                        src={vehicle.img}
                                        alt={vehicle.alt}
                                        width='150px'/>
                                    <p>{vehicle.text}</p>
                                </div>
                            )
                        })}
                    </Carousel>
                </section>
        </section>
    )
}