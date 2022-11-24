import styles from './styles.module.scss';

function NavBar(){
    return(
        <>
        <nav className={styles.nav}>   
            <div>
                <span className={styles.swell_logo}>Swell</span>
            </div>
            <ul className={styles.menu}>
                <li className={styles.li}>
                   <a href="#" className={styles.a}>Why Swell?</a>
                </li>
                <li className={styles.li}>
                   <a href="" className={styles.a}>Features</a>
                </li>
                <li className={styles.li}>
                   <a href="" className={styles.a}>Pricing</a>
                </li>
                <li className={styles.li}>
                   <a href="" className={styles.a}>Resources</a>
                </li>
            </ul>
            <div>
              <span className={styles.start}>
                 Start free trial
              </span>
            <button className={styles.btn_log}>Log in</button>
            </div>
        </nav>
        </>
    ) 
}


export default NavBar;