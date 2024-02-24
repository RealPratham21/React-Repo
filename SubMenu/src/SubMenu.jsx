import "./SubMenu.css";
import { useEffect, useRef, useState } from "react";
function SubMenu(){
    const [ItemNumber, setItemNumber] = useState(null);
    const options = [
        {
            "Title": "Products",
            "Tabs": ["Community", "Content", "Roles"],
            "Icons": ["fa-solid fa-user", "fa-solid fa-star", "fa-solid fa-bomb"],
        },
        {
            "Title": "Solutions",
            "Tabs": ["Developers", "Business Teams", "Content Managers", "ECommerce"],
            "Icons": ["fa-brands fa-connectdevelop", "fa-brands fa-bitcoin", "fa-solid fa-feather", "fa-solid fa-cart-shopping"],
        },
        {
            "Title": "Resources",
            "Tabs": ["Starters", "Showcase"],
            "Icons": ["fa-solid fa-hippo", "fa-brands fa-usps"],
        },
    ]
    return(
        <>
            <div className="parentdiv">
                <div className="NavBar">
                    <div className="BrandName">strapi</div>
                    <div className="NavElements" onClick={()=>{ItemNumber != 0 ? setItemNumber(0) : setItemNumber(null)}}>Products</div>
                    <div className="NavElements" onClick={()=>{ItemNumber != 1 ? setItemNumber(1) : setItemNumber(null)}}>Solutions</div>
                    <div className="NavElements" onClick={()=>{ItemNumber != 2 ? setItemNumber(2) : setItemNumber(null)}}>Resources</div>
                </div>
                {ItemNumber != null && (
                    <div className="Contents">
                        <div className="TabNow">{options[ItemNumber].Title}:</div>
                        {options[ItemNumber].Tabs.map((elem, idx) => <div className="TabOptions"><i className={options[ItemNumber].Icons[idx]}></i>{elem}</div>)}
                    </div>
                )}
                <div className="metadata">
                    <div className="heading">Manage Any Content Anywhere</div>
                    <div className="siteinfo">Strapi is the leading open-source headless CMS. It’s 100% JavaScript and fully customizable.</div>
                </div>
            </div>
        </>
    );
}
export default SubMenu;