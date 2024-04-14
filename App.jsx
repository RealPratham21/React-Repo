import { useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  // const [allValues, setAllValues] = useState([]);
  const [inputValues, setInputValues] = useState();
  const [outputValues, setOutputValues] = useState();
  const [currency, setCurrency] = useState([]);
  const OutputBar = useRef();
  const InputAmt = useRef();
  useEffect(() => {
    fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_U8VmiBpbzAYEn3uV0r06mrg4b1z5Gll3iLC6iD5R")
      .then((res) => res.json()).then(res => setCurrency(Object.values(res.data))); 
    }, []);
  function setInpPrice(selected_currency){
    const temp = currency.filter(val => val.code == selected_currency);
    setInputValues(temp["0"].value);
  }
  function setOptPrice(selected_currency){
    const temp = currency.filter(val => val.code == selected_currency);
    setOutputValues(temp["0"].value);
  }
  function ComputeExchange(){
    OutputBar.current.value = (Number(InputAmt.current.value) / inputValues) * outputValues; 
  }
  return (
    <>
      <div className="greet">
        <h1 className="main_heading">Currency Converter</h1>
        <div className="info">All Currencies at your fingertips!</div>
      </div>
      
      <div className="box">
        <div className="from_box">
          <div className="input-heading">From</div>
          <div className="input_stuff">
            <input type="number" className="from_amt" ref={InputAmt}/>
            <select className="from_currency" onChange={(e) => setInpPrice(e.target.value)}>
              {currency && currency.map(curr => (<option>{curr.code}</option>))}
            </select>
          </div>
        {/* Output Zone */}
        </div>
        <div className="to_box">
          <div className="output-heading">To</div>
          <div className="output_stuff">
            <input type="number" className="to_amt" readOnly ref={OutputBar}/>
            <select className="to_currency" onChange={(e) => setOptPrice(e.target.value)}>
              {currency && currency.map(curr => (<option>{curr.code}</option>))}
            </select>
          </div>
          
        </div>
        <button onClick={ComputeExchange} className="exchange_btn">Exchange</button>
      </div>
    </>
  );
}

export default App;
