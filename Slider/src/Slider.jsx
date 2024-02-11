import "./Slider.css";
import data from "./Slider.js";
import { useState, useEffect } from "react";
function Slider(){
    const [idNow, setid] = useState(0);
    setInterval(next, 3000);
    function next(){
        if (idNow < data.length - 1){
            setid(idNow+1);
        }
        else{
            setid(0);
        }
    }
    function previous(){
        if (idNow > 0){
            setid(idNow-1);
        }
        else{
            setid(data.length - 1);
        }
    }
    useEffect(()=>{
        const boxes = document.querySelectorAll(".children");
        boxes.forEach(box => {
            box.style.transform = `translateX(-${idNow * 100}%)`;
        })
    }, [idNow]);
    return(
        <>
            <div className="parent-div">
                {data.map(val => (
                    <div className="children">
                        <div className="Image"><img src={val.image}/></div>
                        <div className="Name">{val.name.toUpperCase()}</div>
                        <div className="desig">{val.title}</div>
                        <div className="info">{val.quote}</div>
                        <div className="quote"></div>
                    </div>
                ))}
            </div>
            <button className="back" onClick={previous}><i class="fa-solid fa-arrow-left"></i></button>
            <button className="next" onClick={next}><i class="fa-solid fa-arrow-right"></i></button>
        </>
    );
}
export default Slider;