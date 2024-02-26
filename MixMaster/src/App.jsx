import CocktailNav from "./CocktailNav.jsx";
import CocktailList from "./CocktailList.jsx";
import IndividualCocktail from "./IndividualCocktail.jsx";
import CocktailAbout from "./CocktailAbout.jsx";
import styles from "./MainStyles.module.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App(){
  return(
    <>
      <Router>
        <div className={styles.page}>
          <div className={styles.navbar}>
            <CocktailNav />
          </div>
          <Routes>
            <Route path="/" element={<div className={styles.ListCocktails}><CocktailList /></div>}/>
            <Route path="/about" element={<div className={styles.ListCocktails}><CocktailAbout /></div>}/>
            <Route path="/individual/:id" element={<div className={styles.ListCocktails}><IndividualCocktail /></div>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;