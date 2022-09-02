import React from 'react';

export default function Benefits ({benefits}){
    return(
        <section className='section-benefits' id='section-benefits'>
            <h2>Korzyści z eBiletu</h2>
            <div className='benefits-container'>
                {benefits.map(benefit =>{
                    return(
                        <div key={benefit.id} className={'section-benefits--box'+ ' ' + 'box' + benefit.id}>
                            <img className={'img' + benefit.id} src={benefit.img} alt='benefit'/>
                            <p>{benefit.textPrimary}</p>
                            <span>{benefit.textSecondary}</span>
                        </div>
                        )
                })}
            </div>
        </section>
    )
}