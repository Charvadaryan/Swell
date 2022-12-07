import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const nameRow = ["API access to everything","Headless storefront themes","Unlimited product attributes and options","Native subscriptions","Transaction fees on external payment gateways"]
const jsonData = [
  {
    id: 1,
    name: "/picture/swellvector.png",
    title: "ok ",
    logo: "/picture/chackvector.png",
    apiaccess: true,
    fees: "0%" ,
  },
  {
    id: 2,
    name: "/picture/shopifyvector.png",
    logo: "",
    headless: false,
    fees: "2%",
  },
  {
    id: 3,
    name: "/picture/magento.png",
    logo: "",
    unlimited: true,
    fees: "0%"
  },
  {
    id: 4,
    name: "/picture/bigcomerce.png",
    logo: "",
    native: true,
    fees: "0%"
  }
]



function HowDoes() {
  return (
    <div className={styles.table_parent}>
      <div>
        <p className={styles.how_does}>
          How does Swell compare to other <br /> enterprise platforms?
        </p>
        <div className={styles.all_table}>
          <div className={styles.table}>
            <div className={styles.table_child}>
              {nameRow.map((name) => {
                return <div>{name}</div>;
              })}
            </div>
            {jsonData.map((e) => {
              return (
                <div key={e.id} className={styles.chack_or_dash}>
                  <div>
                    <img src={e.name} />
                  </div>
                  <div>
                    {e.apiaccess ? <img src="/picture/chackvector.png" /> : "-"}
                  </div>
                  <div>
                    {e.apiaccess ? <img src="/picture/chackvector.png" /> : "-"}
                  </div>
                  <div>
                    {e.unlimited || e.apiaccess ? (
                      <img src="/picture/chackvector.png" />
                    ) : (
                      "-"
                    )}
                  </div>
                  <div>
                    {e.apiaccess ? <img src="/picture/chackvector.png" /> : "-"}
                  </div>
                  <div>{e.fees}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className={styles.last_reviewed}>
            Last reviewed Oct 2020 Report an error
          </p>
        </div>
        <div>
          <p className={styles.table_footer}>Compare all features</p>
        </div>
        </div>
    </div>
  );
}


export default HowDoes;