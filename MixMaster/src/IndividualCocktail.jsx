import styles from "./IndividualStyles.module.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
function IndividualCocktail(){
    const { id } = useParams();
    const [cocktail, setcocktail] = useState(null);
    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(val => val.json()).then(val => {
          const filteredDrink = val.drinks.find(elem => elem.idDrink === id);
          if (filteredDrink){
            setcocktail(filteredDrink);
          }
          else{
            console.log("Error");
          }
        });
    }, [id]);
    if (!cocktail){
      return <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" className={styles.Loading}/>
    }
    return(
      <>
        <div className={styles.container}>
          <div className={styles.goHome}>
            <button className={styles.bckbtn}><Link to="/">Back Home</Link></button>
          </div>
          <div className={styles.abtDrink}>
            <img src={cocktail.strDrinkThumb} alt="" className={styles.drinkImage}/>
            <div className={styles.drinkInfo}>
              <div className={styles.Name}><span>Name:</span>{cocktail.strDrink}</div>
              <div className={styles.Category}><span>Category:</span>{cocktail.strCategory}</div>
              <div className={styles.info}><span>Info:</span>{cocktail.strAlcoholic}</div>
              <div className={styles.glass}><span>Ingredients:</span>{cocktail.strIngredient1 != null && cocktail.strIngredient1}, {cocktail.strIngredient2 != null && cocktail.strIngredient2}, {cocktail.strIngredient3 != null && cocktail.strIngredient3}, {cocktail.strIngredient4 != null && cocktail.strIngredient4}, {cocktail.strIngredient5 != null && cocktail.strIngredient5}</div>
              <div className={styles.ingredients}><span>Glass:</span>{cocktail.strGlass}</div>
              <div className={styles.instructions}><span>Instructions:</span>{cocktail.strInstructions}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
export default IndividualCocktail;