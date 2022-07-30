import Image from 'next/image';
import styles from '../../styles/main/greeting.module.scss';

export default function Greeting(){
    return (
      <>
        <div className={styles.greeting} data-aos={"zoom-in"}>
          <h1 className={styles.greeting_title}>АДВОКАТ-LEX</h1>
          <h3 className={styles.greeting_subtitle}>Юридическая компания</h3>
          <p className={styles.greeting_text}>Получите помощь юриста или адвоката, осуществляющего свою деятельность в соответствующей Вашей проблеме области права</p>
          <a className={styles.greeting_button} href="#consultation">Скорая юридическая помощь</a>
        </div>
        <div className={styles.greeting_social_list} data-aos={"zoom-in"}>
          <div className={styles.greeting_social_line}></div>
          <a className={styles.greeting_social_item}>
            <Image loader={() => "/icons/icon-insta-gold.svg?w=31"} src={"/icons/icon-insta-gold.svg"} width={31} height={35} alt="инстаграм" />
          </a>
          <div className={styles.greeting_social_item_youtube}>
            <Image loader={() => "/icons/icon-youtube-gold.svg?w=33"} src={"/icons/icon-youtube-gold.svg"} width={33} height={35} alt="ютуб" />
          </div>
          <div className={styles.greeting_social_item}>
            <Image loader={() => "/icons/icon-phone-gold.svg?w=31"} src={"/icons/icon-phone-gold.svg"} width={31} height={35} alt="телефон" />
          </div>
          <div className={styles.greeting_social_item}>
            <Image loader={() => "/icons/icon-whatsapp-gold.svg?w=31"} src={"/icons/icon-whatsapp-gold.svg"} width={31} height={35} alt="вотцап" />
          </div>
        </div>
        <a className={styles.greeting_mouse} href="#victories" data-aos={"zoom-in"}>
          <Image loader={() => "/icons/mouse.png?w=28"} src={"/icons/mouse.png"} width={28} height={72} alt="мышка" />
        </a>
        <div className={styles.greeting_works}>
          <a className={styles.greeting_works_down} href="#victories">
            <Image loader={() => "/icons/icon_arrow_down.svg?w=10"} src={"/icons/icon_arrow_down.svg"} width={10} height={37} alt="стрелка" />
          </a>
          <p className={styles.greeting_works_text}>Наша гордость - наши выигранные дела</p>
        </div>
      </>
    )
}