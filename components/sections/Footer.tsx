
import Image from 'next/image';
import styles from "../../styles/footer.module.scss"

export default function Footer(){

    return (

    <footer className={styles.footer}>
        <div className={styles.footer__container} >
          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Меню
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                О компании
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#services" className={styles.footer__container_nav_link} >
                Услуги
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#command" className={styles.footer__container_nav_link} >
                Команда
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                Выигранные дела
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#contacts" className={styles.footer__container_nav_link} >
                Контакты
              </a>
            </li>
          </ul>  

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Услуги
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="/services/physical" className={styles.footer__container_nav_link} >
                Для физ лиц
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="/services/legal" className={styles.footer__container_nav_link} >
                Для юр лиц
              </a>
            </li>
          </ul> 

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              <span className={styles.text_gradient}>Расписание</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Пн-Пт:</span> <span className={styles.text_white}>10:00 - 19:00</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Сб:</span>  <span className={styles.text_white}>11:00 - 17:00</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Вс:</span>  <span className={styles.text_white}>по записи</span>
            </li>
          </ul> 
          
          <div className={styles.footer__container_contacts}>
            <p className={styles.footer__container_contacts_email}>advokat-lex05@mail.ru</p>
            <p className={styles.footer__container_contacts_tel}>8 800 301 6650</p>
          </div>
        </div>

        <div className={styles.footer__container_bottom} >
          <p className={styles.footer__container_bottom_copyright}>© 2005-2022 Advokat-LEX</p>
          <ul className={styles.footer__container_bottom_social}>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={`${styles.footer__container_bottom_social_link} ${styles.footer__container_bottom_social_link_32}`}>
                <Image loader={() => "/icons/icon-insta-white.svg?w=32"} src={"/icons/icon-insta-white.svg"} width={32} height={32} alt="инстаграм" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={`${styles.footer__container_bottom_social_link} ${styles.footer__container_bottom_social_link_52}`}>
                <Image loader={() => "/icons/icon-youtube-white.svg?w=52"} src={"/icons/icon-youtube-white.svg"} width={52} height={45} alt="ютуб" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={styles.footer__container_bottom_social_link}>
                <Image loader={() => "/icons/icon-whatsapp-white.svg?w=38"} src={"/icons/icon-whatsapp-white.svg"} width={38} height={38} alt="вотцап" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={styles.footer__container_bottom_social_link}>
                <Image loader={() => "/icons/icon-phone-white.svg?w=38"} src={"/icons/icon-phone-white.svg"} width={38} height={38} alt="телефон" />
              </a>
            </li>
          </ul>
        </div>
      </footer>

    )
}