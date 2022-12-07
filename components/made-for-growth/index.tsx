import styles from './styles.module.scss';

function MadeForGrowth() {
    return ( 
      
        <div className={styles.made_for_growth}>
          <div>
            <div className={styles.pic_2_div}>
              <div className={styles.picture_2}>
                <img src="/picture/cardsgrowth.png" alt="" />
              </div>
              <div className={styles.made_for_div}>
                <p className={styles.made_for_growth}>Made for growth</p>
                <p className={styles.until}>
                  Until now, brands looking to stand out have been using a
                  patchwork of apps for legacy platforms or building from
                  scratch.Swell enables you to create sophisticated
                  solutions faster, without having to think about infrastructure
                  or maintenance.
                </p>
                <p className={styles.read_the_case}>Read the case studies</p>
              </div>
            </div>


            <div className={styles.pic_3_div}>
              <div className={styles.commerce_without_div}>
                <p className={styles.commerce_without}>Commerce without compromise</p>
                <p className={styles.free_your_storefront}>
                  Free your storefront from your backend. With headless
                  themes and extensive options for modelling products, you
                  can offer unique customer experiences anywhere.
                </p>
                <p className={styles.tell_me_more}>Tell me more</p>
              </div>
              <div className={styles.picture_3}>
                <img src="/picture/cardscomerce.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      
    );
}



export default MadeForGrowth;