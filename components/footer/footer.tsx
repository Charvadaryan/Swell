import styles from './styles.module.scss';

function Footer() {
    return (
      <>
        <div className={styles.footers}>
          <div>
            <div className={styles.partners}>
              <span className={styles.partners_logo}>nowvac</span>
              <span className={styles.smillo}>smilo</span>
              <span className={styles.partners_logo}>
                <img src="/picture/vector (5).png" />
              </span>
              <span className={styles.spinn}>spinn</span>
              <span className={styles.great_heights}>GREAT HEIGHTS</span>
            </div>
            <div className={styles.footbar}>
              <div className={styles.footbar_div}>
                <img src="/picture/vector (6).png" alt="" />
                <p>
                  <a href="https://twitter.com/">Twitter</a>
                </p>
                <p>LinkedIn</p>
              </div>
              <div className={styles.footbar_div}>
                <p>Product</p>
                <p>Why Swell?</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Changelog</p>
              </div>
              <div className={styles.footbar_div}>
                <p>Company</p>
                <p>Enterprise</p>
                <p>Case Studies</p>
                <p>Partners</p>
                <p>Experts</p>
                <p>About us</p>
              </div>
              <div className={styles.footbar_div}>
                <p>Compare</p>
                <p>Shopify</p>
                <p>Magento</p>
                <p>Headless vs Monolithic</p>
              </div>
              <div className={styles.footbar_div}>
                <p>Questions?</p>
                <p>FAQs</p>
                <p>Support</p>
                <p>Help Center</p>
                <p>API docs</p>
              </div>
            </div>
            <div className={styles.footbar_foot}>
              <div className={styles.footer_chiled}>
                <span>2021 Swell. Made worldwide.</span>
              </div>
              <div className={styles.footer_chiled}>
                <span className={styles.privacy}>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
              <div className={styles.footer_chiled}>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



export default Footer;