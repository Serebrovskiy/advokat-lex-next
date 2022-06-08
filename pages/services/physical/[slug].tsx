import Image from 'next/image';
import ServiceLayout from '../serviceLayout'
import { servicesPhysical } from '../../../mocks/mocks'
import stylesMain from '../../../styles/services/main.module.scss';
import styles from '../../../styles/services/inner.module.scss';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Inner({ services, service }) {
    // console.log('services', services)
    let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

    return (
      <ServiceLayout service={service.seo}>
        <section className={`${styles.services_main_inner}`}>
          <div className={stylesMain.services_main__path}>
            <Link href={`/`}>
              <a className={stylesMain.services_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
            </Link>
            <Link href={`/services/physical`}>
              <a className={stylesMain.services_main__path_text}>Услуги для физических лиц &nbsp;&#62;&nbsp;&nbsp;</a>
            </Link>
            <p className={stylesMain.services_main__path_text}>{service.title}</p>
          </div>
          <div className={styles.services_main_inner__container}>
            <ul className={styles.services_main_inner__nav}>
              {
                 services.map((item)=>{
                  if(item.attributes.heading === 'physical'){
                    return ( 
                      <li key={item.id}>
                        <Link href={`/services/physical/${item.attributes.slug}`}> 
                          <a className={`${styles.services_main_inner__nav_item} ${item.attributes.slug == service.slug ? styles.services_main_inner__nav_item_active : ''}`}>
                            <div className={styles.services_main_inner__nav_item_img}>
                              <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=38`} src={`${src+item.attributes.icon.data.attributes.url}`} width={38} height={30} alt="иконка" />
                            </div>
                            <p className={styles.services_main_inner__nav_item_text}>{item.attributes.title}</p>
                          </a>
                        </Link>
                      </li>
                )}})
              }
                <li>
                  <Link href={`/services/legal`}> 
                    <a className={`${styles.services_main_inner__nav_item}`}>
                      <div className={`${styles.services_main_inner__nav_item_img} ${styles.services_main_inner__nav_item_img_mini}`}>
                        <Image loader={() => `/services/icon-legal.svg?w=30`} src={`/services/icon-legal.svg`} width={30} height={26} alt="иконка" />
                      </div>
                      <p className={styles.services_main_inner__nav_item_text}>Услуги для юридических лиц</p>
                    </a>
                  </Link>
                </li>
            </ul>
            <div className={styles.services_main_inner__content_container}>
              <div className={styles.services_main_inner__title_container}>
                <h1 className={styles.services_main_inner__title}>{service.title}</h1>
                <div className={styles.services_main_inner__title_img}>
                  <Image loader={() => `${src+service.icon.data.attributes.url}?w=103`} src={`${src+service.icon.data.attributes.url}`} width={103} height={94} alt="иконка" />
                </div>
              </div>
              <div className={styles.services_main_inner__text_container}>
              <ReactMarkdown>{service.content}</ReactMarkdown>
              </div>
            </div>
           
          </div>
          <div className={styles.services_main_inner__bottom_container}>
            <h3 className={styles.services_main_inner__subtitle}>Со стоимостью юридических услуг Вы можете ознакомиться в разделе «Прайс-лист»</h3>
            <div className={styles.services_main_inner__price_container}>
              <span className={styles.services_main_inner__line}></span>
              <button className={styles.services_main_inner__btn_price}>Прайс-лист</button>
              <span className={styles.services_main_inner__line}></span>
            </div>
            <p className={styles.services_main_inner__text}>Юристы компании «Адвокат-Лекс» помогут решить Вашу проблему, какой бы сложной она ни была!</p>
            <p className={styles.services_main_inner__text}>С нами Ваша правда под нашей защитой! А закон на Вашей стороне! Решение есть! Ждем Вас!</p>
            <button className={styles.services_main_inner__btn_contacts}>Наши контакты</button>
          </div>
          

        </section>
        
      </ServiceLayout>
    )
}

export const getServerSideProps = async ({ query, req }) => {

  const resServices = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
  const services = await resServices.json();

  const resService = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?filters[slug][$eq]=${query.slug}&populate=*`);
  const service = await resService.json();

  return {
    props: {
      services: services.data,
      service: service.data[0].attributes
    }
  }
}