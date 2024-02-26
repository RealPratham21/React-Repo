import styles from "./ListStyles.module.css";
import { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";
function CocktailList(){
    const [data, setData] = useState([]);
    const [SearchVal, setSearchVal] = useState("");
    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(val => val.json()).then(val => {
            setData(val.drinks);
        });
    }, [])
    const SearchBar = document.querySelector(".InpBar");
    function Search(){
        const filteredList = data.filter(elem => elem.strDrink.toLowerCase().includes(SearchVal.toLowerCase()))
        setData(filteredList);
    }
    function handleChange(e){
        setSearchVal(e.target.value);
    }
    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(val => val.json()).then(val => {
            setData(val.drinks);
        });
    }, [SearchVal]);
    return(
      <>
        <div className={styles.SearchBar}>
            <input type="text" className={styles.InpBar} onChange={handleChange}/>
            <button className={styles.search} onClick={Search}>Search</button>
        </div>
        {data.length == 0 && (<div className={styles.noDrinks}>No Drinks matched your Search</div>)}
        {data.length > 0 && (<div className={styles.container}>
            {data.map(val => (<div className={styles.drink}>
                <img className={styles.imageofdrink} src={val.strDrinkThumb}/>
                <div className={styles.title}>{val.strDrink}</div>
                <div className={styles.glass}>{val.strGlass}</div>
                <div className={styles.type}>{val.strCategory}</div>
                <button className={styles.details} onClick={() => exportVariable(val)}><Link to={`/individual/${val.idDrink}`}>Details</Link></button></div>))}
        </div>)}
      </>
    );
}
function exportVariable(val){
    return val;
}
export { exportVariable };
export default CocktailList;