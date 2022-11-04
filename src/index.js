import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {useState} from "react";
import Home from "./pages/Home";
import BuyTicket1 from "./components/Cities";
import './scss/App.scss';
import cities from "./objects/cities";
import{
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import GdanskBuyTicket from "./components/gdanskBuyTicket";
import normalPrices from "./objects/normalPrices";
import lines from './objects/lines';
import FormToBuyTicket from "./components/formToBuyTicket";
import Ticket from "./components/ticket";



function Index() {
    const [tickets, setTickets] = useState([]);
    const [passengerData, setPassengerData] = useState([]);
    const [chooseCity, setChooseCity] = useState([]);
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element = {< Home />}/>
                <Route path='buyticket' >
                    <Route path='choosecity' element = {<BuyTicket1 cities={cities} addCity={setChooseCity} allCity={chooseCity}/>} />
                    <Route path='selectyouroptions' element ={<GdanskBuyTicket prices={normalPrices} lines={lines} addTicket={setTickets} allTickets={tickets}/>}/>
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
