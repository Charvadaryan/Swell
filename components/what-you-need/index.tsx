import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const array = ["Native subscriptions","1,000+ variants per product","Custom content models","B2B wholesale features","Checkout API"]

function WhatYouNeed() {
    return (
      <div className={styles.what_you_need}>
        <div>
          <h1 className={styles.h1}>
            More of what you need, out <br />
            of the box
          </h1>
          <div className={styles.check_div}>
            <div className={styles.check_div_child}>
              {array.map((arr) => {
                return (
                  <div className={styles.native}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={styles.font_icon}
                    />
                    <span>{arr}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.picture_4}>
            <img src="/picture/factory.png" />
          </div>
        </div>
      </div>
    );
}



export default WhatYouNeed; 