import styles from './styles.module.scss';

const menuList = ["Why Swell?","Features","Pricing","Resources"];


function NavBar(){
    return (
        <nav className={styles.nav}>
          <div>
            <span className={styles.swell_logo}>Swell</span>
          </div>
          <ul className={styles.menu}>
            {menuList.map((val) => {
              return (
                <li className={styles.li}>
                  <a href="#" className={styles.a}>
                    {val}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={styles.log_in}>
            <span className={styles.start}>Start free trial</span>
            <button className={styles.btn_log}>Log in</button>
          </div>
          <div className="-mr-2 flex block md:hidden">
            <button
              type="button"
              className="inline-flex   rounded-md bg-slate-300 p-2 text-purple-700 hover:bg-purple-700 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
    ); 
}


export default NavBar;