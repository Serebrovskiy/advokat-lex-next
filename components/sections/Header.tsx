import Image from 'next/image';
import { Navigation } from '../Navigation'
import styles from '../../styles/header/header.module.scss';

export default function Header({ onOpenPopup, onClose, toggleMobileMenu, activePage }){
    return (
      <header className={styles.header} >   {/* data-aos="zoom-in" */} 
        <div className={styles.header_logo} >
          <Image loader={() => "/header/logo.png?w=250"} src={"/header/logo.png"} width={250} height={67} alt="Логотип"  />
        </div>
        <div className={styles.header_container}>
         <div className={styles.header_contacts}>
           <span className={styles.header_call} onClick={() => onOpenPopup('call')}>Заказать звонок</span>
           <span className={styles.header_phone}>8(800)3016650</span>
           <span className={styles.header_profile}  onClick={() => onOpenPopup('profile')}>Личный кабинет</span>
         </div>
         <Navigation active={activePage} onClose={onClose} />
        </div>
        <div className={styles.header_mobile}>
          <div className={styles.header_mobile_profile} onClick={() => onOpenPopup('profile')}>
            <Image loader={() => "/icons/icon-person.svg?w=35"} src={"/icons/icon-person.svg"} width={35} height={35} alt="профаил" unoptimized  />
          </div>
          <button className={styles.header_mobile_menu} onClick={toggleMobileMenu}>
            <Image loader={() => "/icons/icon-menu.svg?w=35"} src={"/icons/icon-menu.svg"} width={35} height={35} alt="меню" unoptimized  />
          </button>
        </div>
      </header>
    )
}