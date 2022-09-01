import React from 'react'
export default function Ticket({allTickets, allPassengerData}){
    return (
        <section className='section-ticket'>
            <div className='section-ticket-header'>
                <p className='section-ticket-header--text'>BILET WAŻNY</p>
            </div>
            <div className='section-ticket-main'>

                <h1 className='type-of-ticket'>{allTickets[0][0]}</h1>
                <div className='ticket-data-passenger'>
                    <img className='img-qr' src='../../images/kodqr.jpg'/>
                        {allPassengerData.map(function (item, index){
                            return(
                                <div className='ticket-data-passenger-text' key={index}>
                                    <p><strong>{item.firstname}</strong></p>
                                    <p><strong>{item.surname}</strong></p>
                                    <p>PESEL</p>
                                    <p>{item.pesel}</p>
                                </div>
                            )
                        })}

                </div>
                    <h2>GDAŃSK</h2>
                    <p className='type-ticket'>{allTickets[0][2]}</p>
                    <div className='ticket-info'>
                        <p>Cena: <strong>{allTickets[0][1]} zł</strong></p>
                        <p>Ilość: <strong>{allTickets[0][3]}</strong></p>
                        <p>Razem: <strong>{allTickets[0][1]*allTickets[0][3]} zł</strong></p>
                    </div>
                <span className='header-logo2'>E-Bilet</span>
            </div>
        </section>
    );
}