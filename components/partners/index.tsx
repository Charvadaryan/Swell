import styles from './styles.module.scss';

function Partners(){
    return(
        <div>
            <div className={styles.partners}>
              <span className={styles.partners_logo}>nowvac</span>
              <span className={styles.smillo}>smilo</span>
              <span className={styles.partners_logo}>
                <img src="/picture/happymen.png" />
              </span>
              <span className={styles.spinn}>spinn</span>
              <span className={styles.great_heights}>GREAT HEIGHTS</span>
            </div>
        </div>
    )
};

export default Partners;