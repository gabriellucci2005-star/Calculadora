import { useState } from 'react'
import './App.css'

function App() {
  const [acumulator, setAcumulator] = useState("")
  
  function evaluate(){
    setAcumulator(eval(acumulator))
  }
  
  return (
    <div className="container">
      <h1>CALCULADORA</h1>
      <div className='visor'>{acumulator}</div>
      <div className="teclado">
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"7")}}>7</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"8")}}>8</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"9")}}>9</div>
        <div className='tecla'  onClick={()=>{setAcumulator(acumulator.slice(0, -1))}}>Del</div>
        <div className='tecla' onClick={()=>{setAcumulator("")}}>Clear</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"4")}}>4</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"5")}}>5</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"6")}}>6</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"*")}}>*</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"/")}}>/</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"1")}}>1</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"2")}}>2</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"3")}}>3</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"+")}}>+</div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"-")}}>-</div>
        <div className='tecla'></div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+"0")}}>0</div>
        <div className='tecla'></div>
        <div className='tecla' onClick={()=>{setAcumulator(acumulator+".")}}>.</div>
        <div className='tecla' onClick={evaluate}>=</div>
      </div>
    </div>
  )
}

export default App
