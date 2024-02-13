import "./NavBar.css";
import { useState, useEffect } from "react";
function NavBar() {
    const [show, setshow] = useState(false);
    return(
        <>
            <div className="NavBar" id="navbar">
                <div className="Company">
                    CodingAddict
                </div>
                <div className="Tabs">
                    <div className="Pages">Home</div>
                    <div className="Pages">About</div>
                    <div className="Pages">Projects</div>
                    <div className="Pages">Contact</div>
                    <div className="Pages">Profile</div>
                </div>
                <div className="SocialLinks">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="altmenu">
                    <i class="fa-solid fa-bars" onClick={()=> {setshow(!show)}}></i>
                </div>
            </div>
            {show && <div className={"AltOptions" + (show ? " show" : "")} id="AltOps">
                <div className="AltPages">Home</div>
                <div className="AltPages">About</div>
                <div className="AltPages">Projects</div>
                <div className="AltPages">Contact</div>
                <div className="AltPages">Profile</div>
            </div>}
        </>
    );
}
export default NavBar;