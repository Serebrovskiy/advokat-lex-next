import Image from 'next/image';
import ServiceLayout from "../serviceLayout";
import { servicesPhysical } from '../../../mocks/mocks'
import styles from '../../../styles/services/main.module.scss';
import Link from 'next/link';

export default function ServicesPhysicalPage({ service }) {
  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

    return (
      <ServiceLayout service={null}>
        <section className={styles.services_main}>
          <div className={styles.services_main__path}>
            <Link href={`/`}>
              <a className={styles.services_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
            </Link>
            <Link href={`/services/physical`}>
              <a className={styles.services_main__path_text}>Услуги для физических лиц</a>
            </Link>
          </div>
          <div className={styles.services_main__title}>
            <h1 className={styles.services_main__title_text}>Услуги для физических лиц</h1>
            <div className={styles.services_main__title_icon}>
              <Image loader={() => "/services/icon-physical.svg?w=85"} src={"/services/icon-physical.svg"} width={85} height={72} alt="иконка" />
            </div>
          </div>
          <ul className={styles.services_main__container}>
            {
              service.map((item)=>{
                if(item.attributes.heading === 'physical'){
                  return ( 
                  <li key={item.id}>
                    <Link href={`/services/physical/${item.attributes.slug}`}> 
                      <a className={styles.services_main__container_item}>
                        <div className={styles.services_main__container_item_img}>
                          <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=119`} src={`${src+item.attributes.icon.data.attributes.url}`} width={119} height={107} alt="иконка" />
                        </div>
                        <p className={styles.services_main__container_item_text}>{item.attributes.title}</p>
                      </a>
                    </Link>
                  </li>
              )}})
            }
             <li>
               <Link href={`/services/legal`}> 
                 <a className={styles.services_main__container_item}>
                   <div className={`${styles.services_main__container_item_img} ${styles.services_main__container_item_img_mini}`}>
                     <Image loader={() => `/services/icon-legal.svg?w=119`} src={`/services/icon-legal.svg`} width={100} height={90} alt="иконка" />
                   </div>
                   <p className={styles.services_main__container_item_text}>Услуги для юридических лиц</p>
                 </a>
               </Link>
             </li>
          </ul>
          
        </section>
      </ServiceLayout>
    )
}

export const getServerSideProps = async (context: any) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
  const service = await response.json();

  return {
    props: {
      service: service.data
    }
  }
}