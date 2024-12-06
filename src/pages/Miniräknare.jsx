import { useState } from "react"

const Miniräknare = ()=>{

    let [num1, setNum1] = useState(null)
    let [num2, setNum2] = useState(null)
    const [numbers, setNumbers] = useState(0)
    const [sign, setSign] = useState(null)

    const addFunction = ()=>{
        const addedNumbers = parseInt(num1) + parseInt(num2)
        setNumbers(addedNumbers)
    }
    const divideFuncition = ()=>{
        const addedNumbers = parseInt(num1) / parseInt(num2) 
        setNumbers(addedNumbers)
    }
    const subtractFunction = ()=>{
        const addedNumbers = parseInt(num1) - parseInt(num2)
        setNumbers(addedNumbers)
    } 
    
    const multiplyFunction = ()=>{
        const addedNumbers = parseInt(num1) * parseInt(num2)
        setNumbers(addedNumbers)
    }
    
    return(<>   
    
    <input type="text" placeholder="Siffra" onChange={(e)=> setNum1(e.target.value)}/>
    <input type="text" placeholder="Siffra" onChange={(e)=> setNum2(e.target.value)}/>
    <button onClick={addFunction}>Add numbers</button>
    <button onClick={divideFuncition}>Divide numbers</button>
    <button onClick={multiplyFunction}>Multiply numbers</button>
    <button onClick={subtractFunction}>Subtract numbers</button>
    <p>{numbers}</p>
    
    </>)
}
export default Miniräknare