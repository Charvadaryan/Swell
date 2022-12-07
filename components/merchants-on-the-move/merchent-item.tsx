import { FC } from "react";
import styles from './styles.module.scss';


type MerchantItemProps = {
  isReverse: boolean;
  picture: string;
  bgColor: string;
  text: string;
  ps: string;
  logo: string;
}

const MerchantItem: FC<MerchantItemProps> = ({
  isReverse, 
  picture,
  bgColor,
  text,
  ps,
  logo
}) => {
  return (
    <div className={`${bgColor} ${styles.add_merchant_item} ${isReverse ? "flex-col-reverse" : "flex-col" }`}>
      <img src={picture} alt="cover" className={styles.picture}/>
      <div className={styles.vector}>
        <div><img src={logo}/></div>
        <div><p>{text}</p></div>
        <p>{ps}</p>
      </div>
    </div>
  )
}

export default MerchantItem;