import { useState } from 'react';
import styles from '../styles/container-with-tabs.module.scss'

export function ContainerWithTabsMap({ firstName, secondName }){
  const [tabMaps, setTabMaps] = useState(0);

  const onChangeSection = (num) => {
    setTabMaps(num);
  };

  return (
          <>
            <div className={styles.container_tabs}>
              <input
                className={styles.container_tab}
                type="radio"
                name="tab2"
                id="spb"
                value={0}
                onChange={() => onChangeSection(0)}
                checked={!tabMaps}
              />
              <label className={`${styles.container_label} ${styles.container_label_maps}`} htmlFor="spb">{firstName}</label>
              <input
                className={styles.container_tab}
                type="radio"
                name="tab2"
                id="moscow"
                value={1}
                onChange={() => onChangeSection(1)}
                checked={Boolean(tabMaps)}
              />
              <label className={`${styles.container_label} ${styles.container_label_maps}`} htmlFor="moscow">{secondName}</label>
            </div>
            {
             tabMaps
            ?
            <>
              <div className={styles.container_tabs_turn_moscow}></div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A59c2cd98ff2ccb5d50c581701bf7a1eca0dc7bb4dce93eda32989ce73902d5a5&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </>
            :
            <>
              <div className={styles.container_tabs_turn_spb}></div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A67ab68b8f91d2917ef42bc2ab2277e24633979c911606e8a0b337b432309bf14&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </>
              
            }
          </>
  )
}