import {RemoveScroll} from 'react-remove-scroll';
import Image from 'next/image';
import { FormCall } from './FormCall';
import { FormProfile } from './FormProfile';
import { FormImageList } from './FormImageList';
import { FormImage } from './FormImage';
import styles from '../styles/popup.module.scss'

export function Popup({ isOpenPopup, onClose, name }){

  return (
    <>
     <RemoveScroll enabled={isOpenPopup}>
      <div className={`${styles.popup} ${isOpenPopup && styles.popup_opened}`}>
        <div className={`${styles.popup__container} `}>          
          <div className={styles.popup__button_close} onClick={onClose}>
            <Image loader={() => "/icons/icon-close-modal.svg?w=32"} src={"/icons/icon-close-modal.svg"} width={32} height={32} alt="крестик" />
          </div>        
          { 
            name === 'call' && <FormCall /> 
          }
          { 
            name == 'profile' && <FormProfile /> 
          } 
          {
            name.includes('imageList') && (
              // <div className={`${name.includes('image') && styles.popup__container_img}`} >
                <FormImageList caseData={name} />
              // </div>
            )      
          }
                    {
            name.includes('oneImage') && (
              // <div className={`${name.includes('image') && styles.popup__container_img}`} >
                <FormImage caseData={name} />
              // </div>
            )      
          }
        </div> 
      </div>
    </RemoveScroll>
    </>
  )
}