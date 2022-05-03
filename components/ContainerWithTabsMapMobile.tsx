import { useState } from 'react';
import styles from '../styles/container-with-tabs.module.scss'

export function ContainerWithTabsMapMobile({ firstName, secondName }){
  const [tabMaps, setTabMaps] = useState(0);

  const onChangeSection = (num) => {
    setTabMaps(num);
  };

  return (
          <>
            <div className={styles.mobile_map}>
              <input
                className={styles.mobile_map_tab}
                type="radio"
                name="tab-mobile"
                id="spb-mobile"
                value={0}
                onChange={() => onChangeSection(0)}
                checked={!tabMaps}
              />
              <label className={styles.mobile_map_label} htmlFor="spb-mobile">{firstName}</label>
              <input
                className={styles.mobile_map_tab}
                type="radio"
                name="tab-mobile"
                id="moscow-mobile"
                value={1}
                onChange={() => onChangeSection(1)}
                checked={Boolean(tabMaps)}
              />
              <label className={styles.mobile_map_label} htmlFor="moscow-mobile">{secondName}</label>
            </div>
            {
             tabMaps
            ?
            <div className={styles.mobile_map_container}>
              <div className={styles.mobile_map_container_title}>{secondName}</div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A12c866afb8a84feb5c61c29b34307f9f9f3543152d679926b231eb71d4cadb7a&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
            :
            <div className={styles.mobile_map_container}>
              <div className={styles.mobile_map_container_title}>{firstName}</div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb626fcd88f8edaddd2db1b9f7bcb547558049efa703e7c8faa913a629047aa8&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
              
            }
          </>
  )
}