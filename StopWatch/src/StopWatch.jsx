import { useState, useEffect, useRef } from "react";
import "./StopWatchFile.css";
function StopWatch(){
    const [Time, setTime] = useState(0);
    const [isRunning, setRun] = useState(false);
    const TimeNow = useRef(0);
    const idofTimer = useRef();
    useEffect(()=>{
        if (isRunning){
            TimeNow.current = new Date();
            idofTimer.current = setInterval(()=>{
                setTime(Time+(new Date() - TimeNow.current));
            }, 10);
        }
        else{
            clearInterval(idofTimer.current);
        }
    }, [isRunning]);
    function Reset(){
        setRun(false);
        setTime(0);
    }
    return(
        <>
            <div className="parentDiv">
                <h1 className="Heading">Welcome to StopWatch!</h1>
                <p>Time is: {Time/1000}s</p>
                <div className="options">
                    <button onClick={() => setRun(true)} className="start">Start</button>
                    <button onClick={() => setRun(false)} className="Stop">Stop</button>
                    <button onClick={Reset} className="Reset">Reset</button>
                </div>
            </div>
        </>
    );
}
export default StopWatch