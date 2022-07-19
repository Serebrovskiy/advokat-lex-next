import Link from "next/link"
import styles from '../styles/navigation.module.scss'
import stylesMobile from '../styles/mobile-menu.module.scss'

export function Navigation({ active, onClose }){
  // console.log('page', active)
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list} onClick={onClose}>
        <li className={`${active == 'main' ? styles.nav__link_active : ''} ${stylesMobile.mobile_menu__item}`}>
          <Link href={'/'}><a className={styles.nav__link}>Главная</a></Link>
        </li>
        <li className={stylesMobile.mobile_menu__item}>
          {/* <Link href={'/demo'}> */}
            <a href="#about" className={styles.nav__link} >
              О компании
            </a>
          {/* </Link> */}
        </li>
        <li className={`${active == 'services' ? styles.nav__link_active : ''} ${stylesMobile.mobile_menu__item}`}>
          <Link href={'/services/physical'}>
            <a className={styles.nav__link}>
              Услуги
            </a>
          </Link>
        </li>
        <li className={stylesMobile.mobile_menu__item}>
          {/* <Link href={'/demo'}> */}
            <a href="#command" className={styles.nav__link}>
              Команда
            </a>
          {/* </Link> */}
        </li>
        <li className={`${active == 'victories' ? styles.nav__link_active : ''} ${stylesMobile.mobile_menu__item}`}>
          <Link href={'/victories'}>
            <a className={styles.nav__link}>
              Выигранные дела
            </a>
          </Link>
        </li>
        <li className={stylesMobile.mobile_menu__item}>
          {/* <Link href={'/contact'}> */}
            <a href="#contacts" className={styles.nav__link}>
              Контакты
            </a>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  )
}