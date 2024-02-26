import styles from "./NavStyles.module.css";
import { Link } from "react-router-dom";
function CocktailNav(){
    return(
      <>
        <div className={styles.navbar}>
            <div className={styles.title}>MixMaster</div>
            <div className={styles.Tabs}>
                <div className={styles.Home}><Link to="/">Home</Link></div>
                <div className={styles.About}><Link to="/about">About</Link></div>
                <div className={styles.NewsLetter}><Link to="/newsletter">News Letter</Link></div>
            </div>
        </div>
      </>
    );
  }
export default CocktailNav;