import {useState, useRef} from 'react';
import { evaluate } from 'mathjs';
import "./CalcFile.css";
function Calc(){
    const [displaynums, setnums] = useState("");
    function appendNums(elem){
        setnums(displaynums + elem);
    }
    function removenums(){
        if (displaynums.length > 0){
            setnums(displaynums.slice(0, -1));
        }
    }
    function EvalNums(){
        setnums(evaluate(displaynums));
    }
    function clearDisp(){
        setnums("");
    }
    return(
        <>
            <h1>React App - Calculator</h1>
            <div className="Calculator">
                <div className="display">{displaynums}</div>
                <div className="buttons">
                    <button onClick={() => appendNums("1")}>1</button>
                    <button onClick={() => appendNums("2")}>2</button>
                    <button onClick={() => appendNums("3")}>3</button>
                    <button onClick={clearDisp}>C</button>
                    <button onClick={() => appendNums("4")}>4</button>
                    <button onClick={() => appendNums("5")}>5</button>
                    <button onClick={() => appendNums("6")}>6</button>
                    <button onClick={() => appendNums("+")}>+</button>
                    <button onClick={() => appendNums("7")}>7</button>
                    <button onClick={() => appendNums("8")}>8</button>
                    <button onClick={() => appendNums("9")}>9</button>
                    <button onClick={() => appendNums("-")}>-</button>
                    <button onClick={() => appendNums("0")}>0</button>
                    <button onClick={() => appendNums("*")}>*</button>
                    <button onClick={() => appendNums("/")}>/</button>
                    <button onClick={removenums}>✂</button>
                    <button onClick={() => appendNums("(")}>(</button>
                    <button onClick={() => appendNums(")")}>)</button>
                    <button onClick={EvalNums}>=</button>
                    
                </div>
            </div>
        </>
    );
}
export default Calc;