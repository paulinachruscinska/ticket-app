import React, {useState} from 'react';
export default function Numbers(){
    const[numbers, setNumbers]=useState(0);
    const[secondnumbers, setSecondnumbers]=useState(0)
    function handleClick(){
        handleClick24();
        handleClick60();
    }
    function handleClick24(){
        if(numbers===0){
           const intervalId = setInterval(function(){
                setNumbers(function(setNumber) {
                const result =  setNumber + 1;
                if(result<25){
                    return result;
                }
                else{
                    clearInterval(intervalId)
                    return setNumber
                }
                });
            }, 50)
        }
    }
    function handleClick60(){
        if(numbers===0){
            const intervalId = setInterval(function(){
                setSecondnumbers(function(setNumber) {
                    const result = setNumber + 1;
                    if(result<61){
                        return result;
                    } else{
                        clearInterval(intervalId)
                        return setNumber
                    }
                });
            }, 50)
        }
    }
    return(
            <section onMouseEnter={handleClick} className='section-numbers'>
                <div>
                    <p>{numbers}</p>
                    <span>godziny masz dostęp do biletów</span>
                </div>
                <div>
                    <p>{secondnumbers}</p>
                    <span>sekund wystarczy by dokonać zakupu</span>
                </div>
                <div>
                    <p>0</p>
                    <span>formalności</span>
                </div>
            </section>
    )
}