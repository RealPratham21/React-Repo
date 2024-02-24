import "./SideBar.css";
import { useState, useEffect } from "react";
function SideBar(){
    const [show, setshow] = useState(false);
    const [showModal, setshowModal] = useState(false);
    function openClose(){
        if (show){
            document.querySelector(".sidebar").classList.remove("showup");
            document.querySelector(".sidebar").classList.add("closedown");
            setshow(false);
            setTimeout(()=>{
                document.querySelector(".Menu").style.display = "block";
            }, 1000);
        }
        else{
            document.querySelector(".sidebar").classList.remove("closedown");
            document.querySelector(".sidebar").classList.add("showup");
            setshow(true);
            document.querySelector(".Menu").style.display = "none";
        }
    }
    function openCloseModal(){
        if (showModal){
            document.querySelector(".theModal").classList.remove("showupModal");
            document.querySelector(".theModal").classList.add("hideModal");
            setshowModal(false);
        }
        else{
            document.querySelector(".theModal").classList.remove("hideModal");
            document.querySelector(".theModal").classList.add("showupModal");
            setshowModal(true);
        }
    }
    return(
        <>
            <div className="parent">
                <button className="ShowModal" onClick={openCloseModal}>Show Modal</button>
            </div>
            <div className="sidebar closedown">
                <div className="brand">
                    <div className="logo">Coding Addict</div>
                    <div className="closeside" onClick={openClose}><i class="fa-solid fa-xmark closeside"></i></div>
                </div>
                <div className="Tabs">
                    <div className="Options"><i class="fa-solid fa-house"></i><span>Home</span></div>
                    <div className="Options"><i class="fa-solid fa-people-group"></i><span>Team</span></div>
                    <div className="Options"><i class="fa-solid fa-folder-open"></i><span>Projects</span></div>
                    <div className="Options"><i class="fa-solid fa-calendar-days"></i><span>Calendar</span></div>
                    <div className="Options"><i class="fa-solid fa-scroll"></i><span>Documents</span></div>
                    <div className="Socials">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>  
            <div className="Menu">
                <i class="fa-solid fa-bars" onClick={openClose}></i>
            </div>
            <div className="theModal hideModal">
                <div className="closeme"><span onClick={openCloseModal}>❌</span></div>
                <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis porro quaerat eius voluptatum? Veritatis.</div>
            </div>
        </>
    );
}
export default SideBar;