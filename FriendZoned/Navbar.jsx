// Navbar, Routes (Home, Individual), footer
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className={styles.parent}>
            <div className={styles.site_name}>FriendZoned</div>
            <div className={styles.site_options}>
                <Link to="/about"><div className={styles.About}>About</div></Link>
                <Link to="/"><div className={styles.Home}>Home</div></Link>
                <Link to="/contacts"><div className={styles.Contacts}>Contacts</div></Link>
            </div>
        </div>
    );
}
export default Navbar;