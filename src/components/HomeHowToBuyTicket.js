import React from 'react';
export default function HomeHowToBuyTicket(){
    return(
        <section className='section-howtobuy' id='section-howtobuy'>
            <h2>Jak kupić eBilet?</h2>
            <div className='howtobuy-container'>
            <div className='section-howtobuy--box 2'>
                <img src={ require('../images/city.svg').default } alt='city'/>
                <p>Wybierz miasto</p>
                <span>Podaj po jakim mieście chcesz podróżować, aby możliwe było wybranie dla
                Ciebie odpowiedniego transportu publicznego</span>
            </div>
                <div id="arrowAnim">
                    <div className="arrowSliding">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                        <div className="arrow"></div>
                    </div>
                </div>
            <div className='section-howtobuy--box 3'>
                <img src={ require('../images/ticket-howtobuy.svg').default } alt='ticket'/>
                <p>Wybierz i opłać</p>
                <span>Wybierz odpowiedni typ biletu i opłać zamówienie</span>
            </div>
                <div id="arrowAnim">
                    <div className="arrowSliding">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                        <div className="arrow"></div>
                    </div>
                </div>
            <div className='section-howtobuy--box 4'>
                <img src={ require('../images/autobus.svg').default } alt='autobus'/>
                <p>Gotowe! Miłej podróży</p>
                <span>Pamiętaj aby pobrać bilet i okazać go w trakcie kontroli</span>
            </div>
            </div>
        </section>
    )
}