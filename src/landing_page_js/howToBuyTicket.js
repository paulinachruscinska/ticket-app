import React from 'react';
export default function HowToBuyTicket(){
    return(
        <section className='section-howtobuy' id='section-howtobuy'>
            <h2>Jak kupić eBilet?</h2>
            <div className='howtobuy-container'>
            <div className='section-howtobuy--box 2'>
                <img src='../../images/city.svg'/>
                <p>Wybierz miasto</p>
                <span>Podaj po jakim mieście chcesz podróżować, aby możliwe było wybranie dla
                Ciebie odpowiedniego transportu publicznego</span>
            </div>
            <div className='section-howtobuy--box 3'>
                <img src='../../images/ticket-howtobuy.svg'/>
                <p>Wybierz i opłać</p>
                <span>Wybierz odpowiedni typ biletu i opłać zamówienie</span>
            </div>
            <div className='section-howtobuy--box 4'>
                <img src='../../images/autobus.svg'/>
                <p>Gotowe! Miłej podróży</p>
                <span>Pamiętaj aby pobrać bilet i okazać go w trakcie kontroli</span>
            </div>
            </div>
        </section>
    )
}