import React from 'react';
import {Carousel} from "react-responsive-carousel";
import img1 from '../images/train-solid.svg';
import img2 from '../images/train-tram-solid.svg';
import img3 from '../images/bus-solid.svg';

export default function AboutUs(){
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
                        <div>
                            <img className='vehicle' src={img1} alt='train' width='150px'/>
                            <p>pociąg</p>
                        </div>
                        <div>
                            <img className='vehicle' src={img2} alt='tram' width='150px'/>
                            <p>tramwaj</p>
                        </div>
                        <div>
                            <img className='vehicle' src={img3} alt='bus' width='150px'/>
                            <p>autobus</p>
                        </div>
                    </Carousel>
                </section>
        </section>
    )
}