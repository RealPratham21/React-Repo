// Navbar, Routes (Home, Individual), footer
import { useState, useEffect } from "react";
import style from "./Individual.module.css";
function Individual(props){
    const [info, setinfo] = useState(props.info);
    console.log(info);
    return(
        <>
            <div className={style.parent}>
                <div className={style.box}>
                    <img src={info.picture.large} className={style.image}/>
                    <div className={style.info_zone}>
                        <div className={style.name}><b>Name:</b> {info.name.title} {info.name.first} {info.name.last}</div>
                        <div className={style.age}><b>Age:</b> {info.dob.age} <b>Birth Date:</b> {info.dob.date}</div>
                        <div className={style.cell}><b>Phone Number:</b> {info.cell}</div>
                        <div className={style.email}><b>Email:</b> {info.email}</div>
                        <div className={style.nationality}><b>Nationality:</b> {info.nat}</div>
                        <div className={style.gender}><b>Gender:</b> {info.gender}</div>
                        <div className={style.location}><b>Location:</b> {info.location.street.number}, {info.location.street.name}, 
                        {info.location.city} {info.location.state}, {info.location.country} - {info.location.postcode}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Individual;