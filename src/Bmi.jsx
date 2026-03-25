import './Bmi.css';
import { useRef,useState } from "react";

function BmiText({bmi}){
    return 
}
export default function Bmi() {
    const w_inputRef = useRef((null));
    const h_inputRef = useRef((null));
    const [bmi,setBmi]= useState(0);
    function CalBmi(){
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value)/100.0;
        setBmi(w/(h*h));
    }
    return(<><h1> BMI Calculator</h1>
    Weight:<input ref={w_inputRef}/> kg.<br/>
    Height:<input ref={h_inputRef}/> cm.<br/>
    <button onClick={()=>CalBmi()}>Calculate</button>
    <p>BMI value: {bmi} </p>
    <BmiText bmi ={bmi}/>
    </>);
}