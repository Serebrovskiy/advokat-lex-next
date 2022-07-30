import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/container-with-tabs.module.scss'
import styles_services from '../styles/main/services.module.scss';
import Link from 'next/link';

export function ContainerWithTabsServices({ firstName, secondName }){
  const [tabServices, setTabServices] = useState(0);

  const onChangeTabServices = (num) => {
    setTabServices(num);
  };

  return (
          <>
            <div className={styles.container_tabs}>
              <input
                className={styles.container_tab}
                type="radio"
                name="tab"
                id="physical-adress"
                value={0}
                onChange={() => onChangeTabServices(0)}
                checked={!tabServices}
              />
              <label className={styles.container_label} htmlFor="physical-adress">{firstName}</label>
              <input
                className={styles.container_tab}
                type="radio"
                name="tab"
                id="legal-address"
                value={1}
                onChange={() => onChangeTabServices(1)}
                checked={Boolean(tabServices)}
              />
              <label className={styles.container_label} htmlFor="legal-address">{secondName}</label>
            </div>
            {
             tabServices
            ?
            <>
              <div className={styles.container_box}>
                <div className={styles.container_icon_legal}>
                  <Image loader={() => "/icons/icon-services-legal.svg?w=196"} src={"/icons/icon-services-legal.svg"} width={196} height={196} alt="иконка" />
                </div> 
                <div className={styles.container_tabs_turn_legal}></div>
                <ul className={styles.container_list}>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Абонентское юридическое сопровождение бизнеса</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Юридический анализ сделки</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Кадровое сопровождение</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Исполнительное производство</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Представительство в Арбитражном суде</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Налоговые споры</p>
                  </li>  
                </ul>
                <ul className={styles.container_list}>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Административные споры</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Взыскание убытков</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Лицензирование</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Обжалование административных проверок</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Выписки из ЕГРЮЛ и ЕГРИП по Санкт-Петербургу</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Исправление ошибок в ЕГРЮЛ, внесение изменений в ЕГРЮЛ</p>
                  </li>
                </ul>
              </div>
              <Link href={'/services/legal'} passHref>
                <a className={styles_services.services_container_button}>Перейти в раздел</a>
              </Link>
            </>
            :
            <>
              <div className={styles.container_box}>
                <div className={styles.container_icon_physical}>
                  <Image loader={() => "/icons/icon-services-physical.svg?w=196"} src={"/icons/icon-services-physical.svg"} width={196} height={196} alt="иконка" />
                </div> 
                <div className={styles.container_tabs_turn_physical}></div>
                <ul className={styles.container_list}>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Юридические консультации</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Споры с ГИБДД: возврат водительских прав</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Возврат долгов, взыскание задолженности</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Споры со страховыми компаниями</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Трудовые споры с работодателем</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Услуги в сфере недвижимости</p>
                  </li>
                </ul>
                <ul className={styles.container_list}>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Жилищные споры</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Семейные споры </p>
                    <p className={styles.container_description}>расторжение брака, споры о детях, алиментные обязательства, раздел совместно нажитого имущества, лишение родительских прав</p>
                  </li>
                  <li className={styles.container_item}>
                    <p className={styles.container_text}>Наследственные споры</p>
                    <p className={styles.container_description}>оспаривание наследства, восстановление сроков вступления в наследство, приращение наследственных долей и др.</p>
                  </li>
                </ul>
              </div>
              <Link href={'/services/physical'} passHref>
                <a className={styles_services.services_container_button}>Перейти в раздел</a>
              </Link>
            </>
            }
       </>
  )
}