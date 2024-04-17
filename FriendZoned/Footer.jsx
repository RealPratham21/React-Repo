// Navbar, Routes (Home, Individual), footer
import styles from "./Footer.module.css";
function Footer(){
    return(
        <>
            <div className={styles.parent}>
                <div className={styles.my_name}>
                2024 FriendZoned Inc.
                </div>
                <div className={styles.options}>
                    <div>Careers</div>
                    <div>Docs</div>
                    <div>Privacy</div>
                    <div>Manage Cookies</div>
                    <div>Consent</div>
                </div>
            </div>
        </>
    );
}
export default Footer;