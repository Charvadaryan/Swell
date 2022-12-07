import styles from './styles.module.scss';

const twit = [
  {
    name: "Twitter",
    href:  "https://twitter.com/"
  },
  {
    name: "LinkedIn" ,
    href: "https://LinkedIn.com/"
  }
  ]
const products = ["Product","Why Swell?","Features","Pricing","Changelog"]
const companys = ["Company","Enterprise","Case Studies","Partners","Experts","About us"]
const compares = ["Compare","Shopify","Magento","Headless vs Monolithic"]
const questions = ["Questions?","FAQs","Support","Help Center","API docs"]

function Footer() {
    return (
      <>
        <div className={styles.footers}>
          <div>
            <div className={styles.footbar}>
              <div className={styles.footbar_div}>
                <img src="/picture/vector (6).png" alt="" />
                {twit.map((e) => {
                  return (
                    <p>
                      <a href={e.href}>{e.name}</a>
                    </p>
                  );
                })}
              </div>
              <div className={styles.footbar_div}>
                {
                  products.map((product) => {
                    return <p>{product}</p>
                  })
                }
              </div>
              <div className={styles.footbar_div}>
                {
                  companys.map((company) => {
                    return <p>{company}</p>
                  })
                }
              </div>
              <div className={styles.footbar_div}>
                {
                  compares.map((compare) => {
                    return <p>{compare}</p>
                  })
                }
              </div>
              <div className={styles.footbar_div}>
                {
                  questions.map((question) => {
                    return <p>{question}</p>;
                  })
                }
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