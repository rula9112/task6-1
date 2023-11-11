import React, { useState } from "react";
import FaAcquisitionsIncorporated from 'react-icons/fa'
export default function Calcultor(){
    const [calc , setCalc] =useState("");
    const opt = ['+' , '/' , '*'];

     const setNum = val=>{
        if(calc == '' && opt.includes(val) || opt.includes(val) && opt.includes(calc.slice(-1))||val =='-' && calc.slice(-1)=='-'){
            return; }
            setCalc(calc+val)   
    }

    const getResult =()=>{
        setCalc(eval(calc).toString())
    }
    const deleteLast = ()=>{
        if(calc != ""){ const val = calc.slice(0,-1);setCalc(val.toString())}
       }
    const deleteAll = ()=>{setCalc("")}

    return(
        <div className="calculator">
            <div className="display">
                <FaAcquisitionsIncorporated />
                <span>{calc || 0}</span>
            </div>
            <div className="digit">

            <button className="c" onClick={deleteAll}>C</button>
            <button className="equal" onClick={getResult}>=</button>
            <button className="del" onClick={deleteLast}>Del</button>
            
            
            <button className="n1" onClick={() => setNum("1")}>1 </button>
            <button className="n2" onClick={() => setNum("2")}>2</button>
            <button className="n3" onClick={() => setNum("3")}>3</button>
            <button className="dev" onClick={() => setNum("/")}>/</button>
            <button className="n4" onClick={() => setNum("4")}>4</button>
            <button className="n5" onClick={() => setNum("5")}>5</button>
            <button className="n6" onClick={() => setNum("6")}>6</button>
            <button className="plus" onClick={() => setNum("+")}>+</button>
            <button className="n7" onClick={() => setNum("7")}>7</button>
            <button className="n8" onClick={() => setNum("8")}>8</button>
            <button className="n9" onClick={() => setNum("9")}>9</button>
            <button className="n0" onClick={() => setNum("9")}>0</button>
            <button className="d" onClick={() => setNum("*")}>*</button>
            <button className="min" onClick={() => setNum("-")}>-</button>
            
            </div>


        </div>
    )
    
}