import styles from './styles.module.scss';

function MerchantsOnTheMove() {
    return (
      <>
        <div className={styles.parent}>
          <div>
            <div>
              <p className={styles.merchants}>Merchants on the move</p>
            </div>
            <div className={styles.cards_big_div}>
              <div className={styles.card_red}>
                <div className={styles.picture_5}>
                  <img src="/picture/Rectangle.png" alt="" />
                </div>
                <div>
                  <div className={styles.vector_1}>
                    <img src="/picture/vector.png" />
                  </div>
                  <p className={styles.modern}>
                    A modern and elegant
                    <br />
                    website, designed by
                    <br />
                    BCMH
                  </p>
                  <p className={styles.soon_the_sun}>Soon the Sun</p>
                </div>
              </div>
              <div className={styles.card_amber}>
                <div className={styles.vector_2_1}>
                  <img src="/picture/vector (2).png" />
                  <img
                    src="/picture/vector (3).png"
                    className={styles.vector_2_2}
                  />
                </div>
                <p className={styles.swell_has_been}>
                  “Swell has been like a ”<br />
                  spring for Spinn,
                  <br />
                  allowing us to efficiently
                  <br />
                  grow and scale.
                </p>
                <p className={styles.roderick}>
                  Roderick de Rode
                  <br />
                  Spinn Coffee
                </p>
                <div className={styles.parfum}>
                  <img src="/picture/parfum.png" alt="" />
                </div>
              </div>
              <div className={styles.card_green}>
                <div className={styles.picture_7}>
                  <img src="/picture/Rectangle (2).png" alt="" />
                </div>
                <div>
                  <div className={styles.vector_3}>
                    <img src="/picture/vector (1).png" alt="" />
                  </div>
                  <p className={styles.magento}>
                    “Magento is expensive. ”<br />
                    Shopify is limiting. Moltin
                    <br />
                    isn’t there yet. There are a<br />
                    lot of options but none of
                    <br />
                    them are great
                  </p>
                  <p className={styles.ryan_bonifacino}>
                    Ryan Bonifacino
                    <br />
                    Great Heights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}



export default MerchantsOnTheMove;