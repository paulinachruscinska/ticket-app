import Cities from "../components/Cities";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cities from "../objects/cities";

export default function SelectCityToBuyTicket({addCity, allCity}){
    return(
        <>
            <Header/>
            <Cities
                cities={cities}
                addCity={addCity}
                allCity={allCity}
            />
            <Footer/>
        </>
    )
}