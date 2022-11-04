import React from 'react';
import {useForm} from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom';

export default function FormToBuyTicket({ addPassengerData }){
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            email:'',
            firstname:'',
            surname:'',
            phonenumber:'',
            pesel:''
        }
        }
    );
    const onSubmit = (newPassengerData) => {
        console.log(newPassengerData);
        if(typeof addPassengerData === 'function'){
            addPassengerData([newPassengerData])
            navigate('/ticket');
        }
    }
    return(
        <>
            <Header/>
            <section className='section-form-buy-ticket'>
                <h1 className='form-buy-ticket-head'>Dane pasażera</h1>
                <form
                    className='form-buy-ticket'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register(
                            'email',
                            {
                                required: 'To pole jest obowiązkowe'
                            })}
                        placeholder={'E-mail'}
                    />
                    <p>{errors.email?.message}</p>
                    <input
                        {...register(
                            'firstname',
                            {
                                required: 'To pole jest obowiązkowe',
                                minLength: {
                                    value:2,
                                    message:"Minimalna liczba znaków: 2"
                                }})}
                        placeholder={'Imię'} />
                    <p>{errors.firstname?.message}</p>
                    <input
                        {...register(
                            'surname',
                            {
                                required: 'To pole jest obowiązkowe',
                                minLength: {
                                    value:2,
                                    message:"Minimalna liczba znaków: 2"
                                }})}
                        placeholder={'Nazwisko'} />
                    <p>{errors.lastname?.message}</p>
                    <input
                        {...register(
                            'phonenumber',
                            {
                                required: 'To pole jest obowiązkowe',
                                minLength: {
                                    value:9,
                                    message:"Nr telefonu zawiera 9 cyfr"
                                },
                                maxLength:9
                            })}
                        placeholder={'Nr telefonu'} />
                    <p>{errors.phonenumber?.message}</p>
                    <input
                        {...register(
                            'pesel',
                            {
                                required: 'To pole jest obowiązkowe',
                                minLength: {
                                    value:11,
                                    message:"PESEL zawiera 11 cyfr"
                                },
                                maxLength: 11
                            })}
                        placeholder={'PESEL'} />
                    <p>{errors.pesel?.message}</p>
                    <input
                        className='submit-button'
                        id='submit-button'
                        type='submit'/>
                </form>
                <div className='buy-ticket-methods'>
                </div>
            </section>
            <Footer/>
        </>
    )
}

