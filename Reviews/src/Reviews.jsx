import "./ReviewsFile.css";
import ReviewsData from "./ReviewsData.js";
import { useEffect, useState} from "react";
// import math from "mathjs";
function Reviews(){
    const [idNow, setId] = useState(3);
    const [NameNow, setName] = useState();
    const [ImageNow, setImage] = useState("");
    const [DesigNow, setDesig] = useState("");
    const [InfoNow, setInfo] = useState("");
    function IncreaseId(){
        if (idNow == ReviewsData.length){
            setId(1);
        }
        else{
            setId(idNow+1);
        }
    }
    function DecreaseId(){
        if (idNow == 1){
            setId(ReviewsData.length);
        }
        else{
            setId(idNow-1);
        }
    }
    function randomize(){
        setId(Math.floor(Math.random() * (ReviewsData.length))+1);
    }
    useEffect(()=>{
        setName(ReviewsData.find(Review => Review.id == idNow).Name);
        setImage(ReviewsData.find(Review => Review.id == idNow).ImageLink);
        setDesig(ReviewsData.find(Review => Review.id == idNow).Desig);
        setInfo(ReviewsData.find(Review => Review.id == idNow).Info);
    }, [idNow]);
    return(
        <>
            <div className="parent-div">
                <div className="image"><div className="img-bck"><div className="quote-icon"><i class="fa-solid fa-quote-left"></i></div></div><img src={ImageNow} className="ProfImage"/></div>
                <div className="name-desig">
                    <div className="Name">{NameNow}</div>
                    <div className="Desig">{DesigNow}</div>
                </div>
                <div className="info">{InfoNow}</div>
                <div className="options"><div className="back" onClick={DecreaseId}>{'<'}</div><div className="next" onClick={IncreaseId}>{'>'}</div></div>
                <div className="surpriseme"><button onClick={randomize}>Surprise Me</button></div>
            </div>
        </>
    );
}
export default Reviews;