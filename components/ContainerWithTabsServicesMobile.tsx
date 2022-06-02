import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/container-with-tabs.module.scss'
import Link from 'next/link';
//import styles from '../styles/Home.module.scss'

export function ContainerWithTabsServicesMobile({ }){
  const [isOpenTabPhysical, setIsOpenTabPhysical] = useState(false);
  const [isOpenTabLegal, setIsOpenTabLegal] = useState(false);

  const onToggleTabPhysical = () => {
    isOpenTabPhysical ? setIsOpenTabPhysical(false) : setIsOpenTabPhysical(true);
  };
  const onToggleTabLegal = () => {
    isOpenTabLegal ? setIsOpenTabLegal(false) : setIsOpenTabLegal(true);
  };

  return (
          <>
            <div className={`${styles.services_mobile__item} ${isOpenTabPhysical && styles.services_mobile__item_opened}`} onClick={onToggleTabPhysical} >
              Для физических лиц
              <div className={styles.services_mobile__item_icon}>
                <Image loader={() => "/icons/icon-services-physical.svg?w=196"} src={"/icons/icon-services-physical.svg"} width={196} height={196} alt="иконка" />
              </div> 
            </div>
            <div className={`${styles.services_mobile__content} ${isOpenTabPhysical && styles.services_mobile__content_opened_physical}`}>
              <ul className={`${styles.services_mobile__content_list} ${isOpenTabPhysical && styles.services_mobile__content_list_opened}`}>
                <li className={styles.services_mobile__content_item}>Юридические консультации</li>
                <li className={styles.services_mobile__content_item}>Споры с ГИБДД: возврат водительских прав</li>
                <li className={styles.services_mobile__content_item}>Возврат долгов, взыскание задолженности</li>
                <li className={styles.services_mobile__content_item}>Споры со страховыми компаниями</li>
                <li className={styles.services_mobile__content_item}>Трудовые споры с работодателем</li>
                <li className={styles.services_mobile__content_item}>Услуги в сфере недвижимости</li>
                <li className={styles.services_mobile__content_item}>Жилищные споры</li>
                <li className={styles.services_mobile__content_item}>Семейные споры</li>
                <li className={styles.services_mobile__content_item}>Наследственные споры</li>
              </ul>
              <Link href={'/services/physical'} passHref>
                <a className={`${styles.services_mobile__content_button} ${isOpenTabPhysical && styles.services_mobile__content_button_opened}`}>Перейти в раздел</a>
              </Link>
            </div>
            <div className={`${styles.services_mobile__item} ${isOpenTabLegal && styles.services_mobile__item_opened}`} onClick={onToggleTabLegal} >
              Для юридических лиц
              <div className={styles.services_mobile__item_icon}>
                <Image loader={() => "/icons/icon-services-legal.svg?w=196"} src={"/icons/icon-services-legal.svg"} width={196} height={196} alt="иконка" />
              </div> 
            </div>
            <div className={`${styles.services_mobile__content} ${isOpenTabLegal && styles.services_mobile__content_opened_legal}`}>
              <ul className={`${styles.services_mobile__content_list} ${isOpenTabLegal && styles.services_mobile__content_list_opened}`}>
                <li className={styles.services_mobile__content_item}>Абонентское юридическое сопровождение бизнеса</li>
                <li className={styles.services_mobile__content_item}>Юридический анализ сделки</li>
                <li className={styles.services_mobile__content_item}>Кадровое сопровождение</li>
                <li className={styles.services_mobile__content_item}>Исполнительное производство</li>
                <li className={styles.services_mobile__content_item}>Представительство в Арбитражном суде</li>
                <li className={styles.services_mobile__content_item}>Налоговые споры</li>
              </ul>
              <Link href={'/services/legal'} passHref>
                <a className={`${styles.services_mobile__content_button} ${isOpenTabLegal && styles.services_mobile__content_button_opened}`}>Перейти в раздел</a>
              </Link>
            </div>
          </>
  )
}