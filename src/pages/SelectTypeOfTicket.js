import Header from "../components/Header";
import Footer from "../components/Footer";
import TypeOfTicket from "../components/TypeOfTicket";
import normalPrices from "../objects/normalPrices";
import lines from "../objects/lines";

export default function SelectTypeOfTicket({addTicket, allTickets}){
    return(
        <>
            <Header/>
            <TypeOfTicket
                prices={normalPrices}
                lines={lines}
                addTicket={addTicket}
                allTickets={allTickets}
            />
            <Footer/>
        </>
    )
}