import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function HowDoes() {
    return (
      <>
        <div className={styles.table_parent}>
          <p className={styles.how_does}>
            How does Swell compare to other <br /> enterprise platforms?
          </p>

          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className={styles.table_swell}>
                    <span>Swell</span>
                  </th>
                  <th className={styles.table_shopify}>
                    <span>shopify</span>
                    <span className={styles.plus}>plus</span>
                  </th>
                  <th className={styles.table_magento}>
                    <span>Magento</span>
                  </th>
                  <th className={styles.table_comerce}>
                    <div className="square text-purple-200">
                      <p className="ml-6">BIG</p>
                    </div>
                    <span className={styles.comerce}>COMMERCE</span>
                  </th>
                </tr>
              </thead>
              <tbody className={styles.table_tbody}>
                <tr>
                  <td>
                    <p className={styles.api}>API access to everything</p>
                  </td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.font_icon}
                      />
                    </span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.headless}>
                      Headless storefront themes
                    </p>
                  </td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.font_icon}
                      />
                    </span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.headless}>
                      Unlimited product attributes and <br /> options
                    </p>
                  </td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.font_icon}
                      />
                    </span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.font_icon}
                      />
                    </span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.headless}>Native subscriptions</p>
                  </td>
                  <td>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={styles.font_icon}
                      />
                    </span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                  <td>
                    <span>-</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.headless}>
                      Transaction fees on external <br /> payment gateways
                    </p>
                  </td>
                  <td>
                    <span>0%</span>
                  </td>
                  <td>
                    <span>2%</span>
                  </td>
                  <td>
                    <span>0%</span>
                  </td>
                  <td>
                    <span>0%</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.last_reviewed}>
                      Last reviewed Oct 2020. Report an error
                    </p>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                  <td>
                    <span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.table_footer}>
            Compare all features
          </p>
        </div>
      </>
    );
}



export default HowDoes;