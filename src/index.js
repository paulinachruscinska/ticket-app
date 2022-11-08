import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import './scss/App.scss';
import{
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import SelectCityToBuyTicket from "./pages/SelectCityToBuyTicket";
import SelectTypeOfTicket from "./pages/SelectTypeOfTicket";
import CompleteFormToBuyTicket from "./pages/CompleteFormToBuyTicket";
import Ticket from "./pages/Ticket";


function Index() {
    const [tickets, setTickets] = useState([]);
    const [passengerData, setPassengerData] = useState([]);
    const [chooseCity, setChooseCity] = useState([]);
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='buyticket' >
                    <Route
                        path='choosecity'
                        element ={
                        <SelectCityToBuyTicket
                            addCity={setChooseCity}
                            allCity={chooseCity}
                        />}
                    />
                    <Route
                        path='selectyourticket'
                        element ={
                        <SelectTypeOfTicket
                            addTicket={setTickets}
                            allTickets={tickets}
                        />}
                    />
                    <Route
                        path='completeform'
                        element={
                        <CompleteFormToBuyTicket
                            addPassengerData={setPassengerData}
                            allPassengerData={passengerData}
                        />}
                    />
                </Route>
                <Route
                    path='ticket'
                    element={
                    <Ticket
                        allCity={chooseCity}
                        addTicket={setTickets}
                        allTickets={tickets}
                        addPassengerData={setPassengerData}
                        allPassengerData={passengerData}
                    />}
                />
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
