// Navbar, Routes (Home, Individual), footer
import styles from "./App.module.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Individual from "./Individual";
import Contacts from "./Contacts";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
// Link to API: https://randomuser.me/api/
function App(){
    const [info, setinfo] = useState();
    return(
        <>
        <div className={styles.parent_container}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home setinfo={setinfo}/>} />
                <Route path="/individual" element={<Individual info={info}/>} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
            </Routes> 
        </div>
        <Footer />
        </>
    );
}
export default App;