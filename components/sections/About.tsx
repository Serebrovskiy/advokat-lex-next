import Image from 'next/image';
import Link from "next/link";
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/about.module.scss';

export default function About(){
    return (
      <ScrollableAnchor id={'about'}>
      <section className={styles.about}>
          <div className={styles.about_container} data-aos="zoom-in">
            <div className={styles.about_chapter}>
              <span className={styles.about_chapter_line}></span>
              О компании
            </div>
            <h2 className={styles.about_title}>Юридическая компания <span className={styles.main__about_title_large}>«Адвокат-LEX»</span></h2>
            <p className={styles.about_description}>Одним из важнейших направлений деятельности нашей юридической компании является профессиональное оказание юридических услуг гражданам (физическим лицам) и организациям (юридическим лицам). Юридическая компания «Адвокат-LEX» создана в 2005 году юристами-профессионалами в области гражданского, жилищного, семейного, пенсионного, наследственного, административного и уголовного права. </p>
            <Link href={'/articles'} passHref>
              <a className={styles.about_next}>Читать дальше&nbsp;&nbsp;
                <Image loader={() => "/icons/icon_arrow_right.svg?w=32"} src={"/icons/icon_arrow_down.svg"} width={32} height={10} alt="стрелка" />
              </a>
            </Link>
          </div>
          <div className={styles.about_femida} data-aos={"zoom-in"}>
            <Image loader={() => "/elements/femida2.png?w=382"} src={"/elements/femida2.png"} width={382} height={675} alt="фемида" />
          </div> 
          <div className={styles.about_femida_shadow}>
            <Image loader={() => "/elements/femida-shadow.png?w=236"} src={"/elements/femida-shadow.png"} width={236} height={101} alt="тень" />
          </div> 
          <div className={styles.about_vector_container}>
            <div className={styles.about_vector_circle}>
              <Image loader={() => "/elements/vector-circle.svg?w=649"} src={"/elements/vector-circle.svg"} width={649} height={595} alt="круг" />
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
}