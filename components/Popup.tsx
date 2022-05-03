import {RemoveScroll} from 'react-remove-scroll';
import Image from 'next/image';
import { FormCall } from './FormCall';
import { FormProfile } from './FormProfile';
import { FormImage } from './FormImage';
import styles from '../styles/popup.module.scss'


export function Popup({ isOpenPopup, onClose, name }){

  return (
    <>
     <RemoveScroll enabled={isOpenPopup}>
      <div className={`${styles.popup} ${isOpenPopup && styles.popup_opened}`}>
        <div className={`${styles.popup__container} ${name.includes('image') && styles.popup__container_img}`}>
          <div className={styles.popup__button_close} onClick={onClose}>
            <Image loader={() => "/icons/icon-close-modal.svg?w=32"} src={"/icons/icon-close-modal.svg"} width={32} height={32} alt="крестик" />
          </div> 
        
          {/* <form className={styles.popup__form}>
            <input className={styles.popup__form_input} type="tel" name="phone" placeholder="Телефон" required />
            <button className={styles.popup__form_button} type="submit">Заказать звонок</button>
          </form> */}
          { 
            name === 'call' && <FormCall /> 
          }
          { 
            name == 'profile' && <FormProfile /> 
          }
          {
            name.includes('image') && <FormImage caseData={name} />
          }

        </div> 
      </div>
    </RemoveScroll>
    </>
  )
}