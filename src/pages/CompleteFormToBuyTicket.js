import Header from "../components/Header";
import Footer from "../components/Footer";
import FormToBuyTicket from "../components/FormToBuyTicket";

export default function CompleteFormToBuyTicket({addPassengerData, allPassengerData}){
    return(
        <>
            <Header/>
            <FormToBuyTicket
                addPassengerData={addPassengerData}
                allPassengerData={allPassengerData}
            />
            <Footer/>
        </>
    )
}