import { useState, useEffect } from "react";
import './ClockFile.css';
function Clock(){
    const [TimeNow, setTime] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return () => {
            console.log("EL Added");
        }
    }, [document]);
    return(
        <>
            <div className="clock-container">
                <p className="time-now">{TimeNow.getHours().toString().padStart(2, 0)}:{TimeNow.getMinutes().toString().padStart(2, 0)}:{TimeNow.getSeconds().toString().padStart(2, 0)} {TimeNow.getHours() >= 12 ? "PM" : "AM"}</p>
            </div>
        </>
    );
}
export default Clock