import styles from './styles.module.scss';

function MadeForGrowth() {
    return ( 
      <>
        <div className={styles.made_for_growth}>
          <div>
            <div className={styles.pic_2_div}>
              <div className={styles.picture_2}>
                <img src="/picture/image_1-removebg-preview.png" alt="" />
              </div>
              <div className={styles.made_for_div}>
                <p className={styles.made_for_growth}>Made for growth</p>
                <p>
                  Until now, brands looking to stand out have been using a
                  <br />
                  patchwork of apps for legacy platforms or building from
                  <br />
                  scratch.Swell enables you to create sophisticated
                  <br />
                  solutions faster, without having to think about infrastructure
                  <br />
                  or maintenance.
                </p>
                <p className={styles.read_the_case}>Read the case studies</p>
              </div>
            </div>


            <div className={styles.pic_3_div}>
              <div className={styles.commerce_without_div}>
                <p className={styles.commerce_without}>Commerce without compromise</p>
                <p>
                  Free your storefront from your backend. With headless
                  <br />
                  themes and extensive options for modelling products, you
                  <br />
                  can offer unique customer experiences anywhere.
                </p>
                <p className={styles.tell_me_more}>Tell me more</p>
              </div>
              <div className={styles.picture_3}>
                <img src="/picture/image_3-removebg-preview.png" alt="" />
              </div>
            </div>



          </div>
        </div>
      </>
    );
}



export default MadeForGrowth;