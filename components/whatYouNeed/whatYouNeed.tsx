import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function WhatYouNeed() {
    return (
      <>
        <div className={styles.what_you_need}>
          <div>
            <h1 className={styles.h1}>
              More of what you need, out <br />
              of the box
            </h1>
            <div className={styles.check_div}>
              <div className={styles.check_div_child}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.font_icon}
                  />
                </span>
                <span className={styles.native}>Native subscriptions</span>
              </div>
              <div className={styles.check_div_child}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.font_icon}
                  />
                </span>
                <span className={styles.native}>1,000+ variants per product</span>
              </div>
              <div className={styles.check_div_child}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.font_icon}
                  />
                </span>
                <span className={styles.native}>Custom content models</span>
              </div>
              <div className={styles.check_div_child}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.font_icon}
                  />
                </span>
                <span className={styles.native}>B2B wholesale features</span>
              </div>
              <div className={styles.check_div_child}>
                <span>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.font_icon}
                  />
                </span>
                <span className={styles.native}>Checkout API</span>
              </div>
            </div>
            <div className={styles.picture_4}>
              <img src="/picture/image 4.png" />
            </div>
          </div>
        </div>
      </>
    );
}



export default WhatYouNeed; 