import React from 'react'
export default function Ticket({allTickets, allPassengerData, allCity}){
    const ticket = allTickets[0][0];
    const priceOfTicket = allTickets[0][1];
    const typeOfTicket = allTickets[0][2];
    const quantityOfTicket = allTickets[0][3];
    return (
        <section className='section-ticket'>
            <div className='section-ticket-header'>
                <p className='section-ticket-header--text'>BILET WAŻNY</p>
            </div>
            <div className='section-ticket-main'>

                <h1 className='type-of-ticket'>{ticket}</h1>
                <div className='ticket-data-passenger'>
                    <img className='img-qr' src='../images/kodqr.jpg' alt='qr'/>
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
                    <h2>{allCity}</h2>
                    <p className='type-ticket'>{typeOfTicket}</p>
                    <div className='ticket-info'>
                        <p>Cena: <strong>{priceOfTicket} zł</strong></p>
                        <p>Ilość: <strong>{quantityOfTicket}</strong></p>
                        <p>Razem: <strong>{priceOfTicket*quantityOfTicket} zł</strong></p>
                    </div>
                <span className='header-logo2'>E-Bilet</span>
            </div>
        </section>
    );
}