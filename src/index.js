import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from "react";
import Main from "./App";
import BuyTicket1 from "./buy_ticket_js/buyTicketFirstPage";
import './App.scss';
import cities from "./buy_ticket_js/cities";
import{
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import GdanskBuyTicket from "./buy_ticket_js/gdanskBuyTicket";
import normalPrices from "./buy_ticket_js/normalPrices";
import lines from './buy_ticket_js/lines';
import FormToBuyTicket from "./buy_ticket_js/formToBuyTicket";
import Ticket from "./buy_ticket_js/ticket";



function Index() {
    const [tickets, setTickets] = useState([]);
    const [passengerData, setPassengerData] = useState([]);
    const [chooseCity, setChooseCity] = useState([]);
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element = {< Main />}/>
                <Route path='buyticket' >
                    <Route path='choosecity' element = {<BuyTicket1 cities={cities} addCity={setChooseCity} allCity={chooseCity}/>} />
                    <Route path='gdansk' element ={<GdanskBuyTicket prices={normalPrices} lines={lines} addTicket={setTickets} allTickets={tickets}/>}/>
                    <Route path='completeform' element={<FormToBuyTicket addPassengerData={setPassengerData} allPassengerData={passengerData}/>}/>
                </Route>
                <Route path='ticket' element={<Ticket allCity={chooseCity} addTicket={setTickets} allTickets={tickets} addPassengerData={setPassengerData} allPassengerData={passengerData}/>}/>
            </Routes>
        </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
