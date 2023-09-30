import { useState } from "react"
import {InteractionButtom,} from './style.js'
 
 function Midle(){

 const [number, setNumber] = useState(0)

 const addition = () => {
    if (number >= 0 && number <=9)
    setNumber(number +1)};

 const subtraction = () => {
 if (number <=10 && number >=1)
 setNumber(number -1)
}

const restart = () => {
if (number >= 1)
setNumber(number === 0)
}

 

 

 return(

    <>
    <h1>{number}</h1>
    <section>
    <InteractionButtom onClick={addition}>Adicionar +1</InteractionButtom>
    <InteractionButtom onClick={subtraction}>Subtrair 1</InteractionButtom>
    <InteractionButtom onClick={restart}>Zerar</InteractionButtom>
    </section>
    </>
    
    )
}

export default Midle