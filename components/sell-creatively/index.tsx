import styles from './styles.module.scss';

function SellCreatively(){
    return (
      <>
        <div className={styles.wrapper}>
          <p className={styles.sell}>Sell Creatively</p> 
        </div>
        <p className={styles.swell_is_the_most_powerful}>
          Swell is the most powerful{" "}
          <span className={styles.headless}>headless ecommerce platform</span><br/>
          {" "}for modern brands, startups, and agencies.
        </p>
        
        <div className={styles.input_div}>
          <input
            className={styles.input}
            placeholder="Enter your email"
          />
          <button className={styles.btn_start}>
              Start free trial
          </button>
        </div>
        <div className={styles.picture_1}>
          <img src="/picture/picturecomputer.png" alt="" />
        </div>
      </>
    );
}


export default SellCreatively;