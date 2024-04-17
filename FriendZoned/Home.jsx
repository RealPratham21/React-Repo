// Navbar, Routes (Home, Individual), footer
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home(props){
    const [info, setinfo] = useState([]);
    useEffect(()=>{
        for(let i = 0; i < 20; i++){
            fetch("https://randomuser.me/api/").then(res => res.json()).then(res => setinfo((prevInfo) => [...prevInfo, res.results[0]]));
        }
    }, []);
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.heading}>Find a Perfect Friend for Yourself 💗</div>
                <div className={styles.box}>
                    {info.map(elem => (<Link to="/individual"><div className={styles.profiles} onClick={() => props.setinfo(elem)}><img className={styles.image} src={elem.picture.large}/>
                    <div className={styles.Name_Age}>{elem.name.first}, {elem.dob.age}</div></div></Link>))}
                </div>
            </div>
        </>
    );
}
export default Home;