import "./Tabs.css";
import { useState, useEffect } from "react";
function Tabs() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
    const [title, settitle] = useState();
    const [company, setcompany] = useState();
    const [tenure, settenure] = useState();
    const [info, setinfo] = useState([]);
    useEffect(()=>{
        const datanow = data.filter(val => val.order == id);
        if (datanow.length > 0){
            settitle(datanow[0].title);
            setcompany(datanow[0].company);
            settenure(datanow[0].dates);
            setinfo(Array.from(datanow[0].duties));
        }
    }, [id, data]);
    useEffect(()=>{
        fetch("https://course-api.com/react-tabs-project").then(value => value.json()).then(value => setData(value));
    }, []);
    function highlight(elem){
        const allbuttons = document.querySelectorAll(".options");
        allbuttons.forEach(btn => btn.style.border = "none");
        allbuttons.forEach(btn => btn.style.color = "black");
        elem.style.borderLeft = "2px solid gray";
        elem.style.color = "gray";
    }
    return(
        <>
            <div className="parent-div">
                <div className="sidebar">
                    {data.map(val => <button className="options" onClick={(e) => {setId(val.order);highlight(e.target)}}>{val.company}</button>)}
                </div>
                <div className="main">
                    <div className="title">{title}</div>
                    <div className="company">{company}</div>
                    <div className="tenure">{tenure}</div>
                    <div className="info">
                        {info.map(point => (<div className="point"><i class="fa-solid fa-chevron-right"></i><div className="point-info">{point}</div></div>))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tabs;