import React, {useEffect, useState} from 'react';
import Header from "../landing_page_js/header";
import Footer from "../landing_page_js/footer";
import Select from "react-select";
import {useNavigate} from 'react-router-dom';
export default function GdanskBuyTicket({prices, lines, addTicket, allTickets}){
    const [displayNormalTicket, setDisplayNormalTicket] = useState('none');
    const [displayReducedTicket, setDisplayReducedTicket] = useState('none');
    const [displayPrices, setDisplayPrices]= useState('none');
    const [displayForm, setDisplayForm] = useState('none');
    const [number, setNumber] = useState('1');
    const [typeOfTicket, setTypeOfTicket] = useState('null');
    const [priceofTicket, setPriceofTicket]= useState('null');
    const [textofTicket, setTextofTicket]= useState('null');
    const arrayTicket = [typeOfTicket,priceofTicket, textofTicket, number];
    let navigate = useNavigate();

    const handleTickets = (e, newTicket) => {
        e.preventDefault();
        if (typeof addTicket === "function") {
            addTicket(prev => [...prev, newTicket])

            if (typeOfTicket !== 'null') {
                navigate("/buyticket/completeform");
            }

        }
        allTickets.push(newTicket);
    }


    useEffect(() => {
    }, [typeOfTicket]);

    const handleClickNormalTicket=()=> {
        if (displayNormalTicket === 'none') {
            setDisplayPrices('block');
            setDisplayNormalTicket('block');
            setDisplayReducedTicket('none');
            setTypeOfTicket("BILET NORMALNY");


        } else {
            setDisplayPrices('none');
            setDisplayNormalTicket('none');
            setDisplayReducedTicket('none');
            setTypeOfTicket('null');

        }
    }
    const handleClickReducedTicket=()=>{
        if(displayReducedTicket === 'none') {
            setDisplayPrices('block');
            setDisplayReducedTicket('block');
            setDisplayNormalTicket('none');
            setTypeOfTicket('BILET ULGOWY');
        } else {
            setDisplayPrices('none');
            setDisplayNormalTicket('none');
            setDisplayReducedTicket('none');
            setTypeOfTicket('null');
        }
    }
    const chooseTicketPrice=(text, price)=> {
        setPriceofTicket(price);
        setTextofTicket(text);
        if(displayForm ==='none'){
            setDisplayForm('flex');
        } else {
            setDisplayForm('none');
        }
    }
    const handleChange=(selectedoption)=>{
        console.log('handleChange', selectedoption)
    }

    return (
        <>
            <Header/>
            <section className='section-gdansk'>
                <div className='type-of-ticket'>
                    <div className='normal-ticket' onClick={handleClickNormalTicket} id={typeOfTicket}>
                        <p className='normal-ticket-text'>bilet normalny</p>
                    </div>
                    <div className='reduced-ticket' onClick={handleClickReducedTicket} id={typeOfTicket}>
                        <p className='reduced-ticket-text'>bilet ulgowy</p>
                    </div>
                </div>
                <div className='ticket-prices' style={{display: displayPrices}}>
                    <div className='ticket-prices-normal' style={{display: displayNormalTicket }}>
                        {prices.map(function(price, index){
                            return(
                            <div key={index} className='price'  onClick={() => chooseTicketPrice(price.text, price.price)}>
                                <span className='price-text'>{price.text}</span>
                                <span className='price-single'>{price.price + ' zł'}</span>
                            </div>
                            )
                        })}
                    </div>
                    <div className='ticket-prices-reduced' style={{display: displayReducedTicket}}>
                        {prices.map(function(price, index){
                            return(
                                <div key={index} className='price' onClick={() => chooseTicketPrice(price.text, price.price/2)} >
                                    <span className='price-text'>{price.text} </span>
                                    <span className='price-single'>{price.price/2 + ' zł'}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <form
                    className='choose-line-and-item-of-tickets'
                    style={{display: displayForm}}
                    onSubmit={(e) => handleTickets(e,arrayTicket)}
                >
                    <div className='choose-line'>
                        <Select options={lines} required onChange={handleChange} placeholder="Wybierz nr linii" isMulti  />
                    </div>
                    <div className='choose-item-of-tickets'>
                        <label>Wybierz ilość biletów:</label><br/>
                        <input className='number' type='number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
                    </div>
                    <button type='submit' className='button-buy'>Kupuję</button>
                </form>
            </section>
            <Footer/>
        </>
    )
}