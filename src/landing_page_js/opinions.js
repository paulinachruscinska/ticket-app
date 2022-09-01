import React, {useState} from 'react';
export default function Opinions({opinions}){
    const[slideIndex, setSlideIndex] = useState(1)

    const nextSlide=()=>{
        if(slideIndex!==opinions.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex===opinions.length){
            setSlideIndex(1)
        }
    }
    const prevSlide=()=>{
        if(slideIndex!==1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex===1){
            setSlideIndex(opinions.length)
        }
    }
    return(
        <section className='section-opinions' id='section-opinions'>
            <h2>CO MÓWIĄ O NAS INNI?</h2>
            <div className='carousel'>
                {opinions.map(function(opinionItem, index){
                    return(
                        <div key={opinionItem.id}
                             className={slideIndex === index + 1 ? "slide-active" : "slide" } id={opinionItem.id}>
                            <p>{opinionItem.text}</p>
                            <span>{opinionItem.signature}</span>
                        </div>
                    )
                })}
                <button onClick={nextSlide} className='button-next'/>
                <button onClick={prevSlide} className='button-prev'/>
            </div>
        </section>
    )
}