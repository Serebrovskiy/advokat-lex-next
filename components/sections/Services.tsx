import Image from 'next/image';
import Link from "next/link";
import ScrollableAnchor from 'react-scrollable-anchor';
import { ContainerWithTabsServices } from '../ContainerWithTabsServices';
import { ContainerWithTabsServicesMobile } from '../ContainerWithTabsServicesMobile';
import styles from '../../styles/services.module.scss';

export default function Services(){
    return (
        <ScrollableAnchor id={'services'}>
          <section className={styles.services}>
            <div className={styles.services_vector_circle}>
              <Image loader={() => "/elements/vector-circle.svg?w=649"} src={"/elements/vector-circle.svg"} width={649} height={595} alt="круг" />
            </div>
            <div className={styles.services_chapter} data-aos={"zoom-in"}>
              <span className={styles.services_chapter_line}></span>
              Услуги
            </div>
            <h2 className={styles.services_title} data-aos={"zoom-in"}>Наши основные юридические услуги</h2>        
            <div className={styles.services_container} data-aos={"zoom-in"}>
              <ContainerWithTabsServices firstName="Для физических лиц" secondName="Для юридических лиц" />
                {/* <Link href={'/services/physical'} passHref>
                  <a className={styles.services_container_button}>Перейти в раздел</a>
                </Link> */}

                {/* <div className={styles.services_container_icon}>
                  <Image loader={() => "/icons/icon-services.svg?w=196"} src={"/icons/icon-services.svg"} width={196} height={196} alt="иконка" />
                </div>  */}
            </div>
            <div className={styles.services_mobile} data-aos={"zoom-in"}>
              <ContainerWithTabsServicesMobile />
            </div>
          </section>
        </ScrollableAnchor>
    )
}