import { log } from "mathjs";
import "./Accordion.css";
import Questions from "./Accordiondata.js";
import { useState, useEffect } from "react";

function Accordion(){
    const [visible, setvisible] = useState([]);

    function togglevisibility(id){
        console.log(id-1);
        let newVisible = [...visible];
        console.log(newVisible);
        newVisible[id-1] == true ? newVisible[id-1] = false : newVisible[id-1] = true;
        console.log(newVisible);
        setvisible(newVisible);
    }
    
    

    useEffect(() => {
        const display = [];
        Questions.map(Question => display.push(false));
        setvisible(display);
    }, []);

    return(
        <>
            <div className="parent-div">
                <h1 className="Heading">Questions</h1>
                <div className="questions">
                    {Questions.map(Question => (
                        <div className="ques-list" key={Question.id}>
                            <div className="Ques-Part">{Question.title} 
                                <i className="fa-solid fa-plus" onClick={() => togglevisibility(Question.id)}></i>
                            </div>
                            {visible[Question.id - 1] ? <div className="Ans-Part">{Question.info}</div> : null}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Accordion;
