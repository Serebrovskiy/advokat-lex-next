
import Image from 'next/image';
import ScrollableAnchor from 'react-scrollable-anchor'
import { ContainerWithTabsMap } from '../ContainerWithTabsMap';
import { ContainerWithTabsMapMobile } from '../ContainerWithTabsMapMobile';
import styles from '../../styles/main/contacts.module.scss'

export default function Contacts({ onOpenPopup }){
    return (
      <ScrollableAnchor id={'contacts'}>
        <section className={styles.contacts}>
          <div className={styles.contacts_chapter} data-aos={"zoom-in"}>
            <span className={styles.contacts_chapter_line}></span>
            Контакты
          </div>
          <h2 className={styles.contacts_title} data-aos={"zoom-in"}>Наши офисы в Москве и <span className="mobile-br"><br></br></span>Санкт-Петербурге</h2>
          <div className={styles.contacts_container}>
            <div className={styles.contacts_container_data}>
              <h3 className={styles.contacts_container_data_subtitle} data-aos={"zoom-in"}>АДРЕСА в Санкт-Петербурге</h3>
              <div className={styles.contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.contacts_container_data_text}>Петроградский район,<span className="mobile-br"><br></br></span> Малый Проспект П.С. д.32</p>
              </div>
              <div className={styles.contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.contacts_container_data_text}>Приморский район,<span className="mobile-br"><br></br></span> пр-т Королева д.29, к.1</p>
              </div>
              <div className={styles.contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.contacts_container_data_text}>Калининский район,<span className="mobile-br"><br></br></span> пр-т. Просвещения д.46, к.1</p>
              </div>
              <div className={styles.contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.contacts_container_data_text} data-aos={"zoom-in"}>Московский район,<span className="mobile-br"><br></br></span> Московский пр-т. д.222</p>
              </div>
              <h3 className={`${styles.contacts_container_data_subtitle} ${styles.contacts_container_data_subtitle_30}`} data-aos={"zoom-in"}>АДРЕСА в Москве</h3>
              <div className={styles.contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.contacts_container_data_text}>проспект Вернадского д.78, с7</p>
              </div>
              <div className={styles.contacts_container_data_box} data-aos={"zoom-in"}>
                <div className={`${styles.contacts_container_data_icon} ${styles.contacts_container_data_icon_30}`}>
                  <Image loader={() => "/icons/icon-phone-white-big.svg?w=30"} src={"/icons/icon-phone-white-big.svg"} width={30} height={34} alt="адрес" />
                </div> 
                <h3 className={`${styles.contacts_container_data_subtitle} ${styles.contacts_container_data_subtitle_contact}`}>Телефон</h3>
              </div>
              <p className={styles.contacts_container_data_text_contact} data-aos={"zoom-in"}>8 800 301 6650</p>
              <div className={styles.contacts_container_data_box} data-aos={"zoom-in"}>
                <div className={`${styles.contacts_container_data_icon} ${styles.contacts_container_data_icon_30}`}>
                  <Image loader={() => "/icons/icon-email-white.svg?w=30"} src={"/icons/icon-email-white.svg"} width={30} height={34} alt="адрес" />
                </div> 
                <h3 className={styles.contacts_container_data_subtitle_contact}>E-MAIL</h3>
              </div>
              <p className={styles.contacts_container_data_text_contact} data-aos={"zoom-in"}>advokat-lex05@mail.ru</p>
              {/* <Link href={'/demo'} passHref> */}
                <button className={styles.contacts_button} onClick={() => onOpenPopup('call')} data-aos={"zoom-in"}>Заказать звонок</button>
              {/* </Link> */}
            </div>
            <div className={styles.contacts_map} data-aos={"zoom-in"}>
              <ContainerWithTabsMap firstName="Санкт-Петербург" secondName="Москва" />
            </div> 
          </div>
          <div className={styles.contacts_mobile_map} data-aos={"zoom-in"}>
            <ContainerWithTabsMapMobile firstName="Санкт-Петербург" secondName="Москва" />
          </div> 
        </section>
      </ScrollableAnchor>

    )
}