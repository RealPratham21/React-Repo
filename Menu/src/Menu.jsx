import { useState, useEffect } from "react";
import "./MenuFile.css";
import menu from "./MenuFile.js";
function Menu(){
    const [typeNow, setType] = useState("All");
    const [newList, setnewList] = useState([]);
    const [options, setoptions] = useState([]);
    useEffect(()=>{
        const newSet = new Set();
        menu.forEach(Item => {
            newSet.add(Item.category);
        });
        setoptions(Array.from(newSet));
    }, [])
    useEffect(()=>{
        if (typeNow == "All"){
            setnewList(menu);
        }
        else{
            setnewList(menu.filter(Item => Item.category == typeNow));
        }
    }, [typeNow]);
    return(
        <>
            <div className="parent-div">
                <div className="Heading">Our Menu</div>
                <hr />
                <div className="options">
                    <button onClick={() => setType("All")}>All</button>
                    {options.map(option => <button onClick={() => setType(option)}>{option.charAt(0).toUpperCase() + option.slice(1, option.length)}</button>)}
                </div>
                <div className="Items">
                    {newList.map((Item, idx) => <div className="food-item" key={idx}><img src={Item.img}/><div className="title-price"><div className="title">{Item.title.charAt(0).toUpperCase() + Item.title.slice(1, Item.title.length)}</div><div className="price">${Item.price}</div></div><div className="desc">{Item.desc}</div></div>)}
                </div>
            </div>
        </>
    );
}
export default Menu;