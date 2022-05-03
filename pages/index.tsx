
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link"
import ScrollableAnchor from 'react-scrollable-anchor'
import AOS from 'aos';
import { MainLayout } from '../components/MainLayout'
import { Navigation } from '../components/Navigation'
import { Slider } from '../components/Slider'
import ErrorPage from "./404";

import { ContainerWithTabsMap } from '../components/ContainerWithTabsMap';
import { ContainerWithTabsServices } from '../components/ContainerWithTabsServices';
import { ContainerWithTabsMapMobile } from '../components/ContainerWithTabsMapMobile';
import { MobileMenu } from '../components/MobileMenu';
import { Popup } from '../components/Popup';
import { ContainerWithTabsServicesMobile } from '../components/ContainerWithTabsServicesMobile';
import styles from '../styles/Home.module.scss'
import "aos/dist/aos.css";


export default function Home({ logo, cases }) {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [namePopup, setNamePopup] = useState('');

  if(!logo){
    return <ErrorPage />
  }

  const toggleMobileMenu = () => {
    isOpenMobileMenu ? setIsOpenMobileMenu(false) : setIsOpenMobileMenu(true);
  }

  const handleOpenPopup = (name) => {
    // console.log('name',name)
    setIsOpenPopup(true);
    setNamePopup(name);
  }

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
    setIsOpenPopup(false);
    setNamePopup('');
  } 


  // const img = logo.data;
  // let src = process.env.API_URL;

  // if(img){
  //   src += logo.data.attributes.url;
  // } 

  return (
    <MainLayout 
      title={'Юридическая компания «Адвокат-LEX» в Санкт-Петербурге'}
      description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
    >

      <main className={styles.main}>

        <section className={styles.main__top_section}>

          <video className={styles.main__heading_video} autoPlay loop muted>
            <source src="https://media.istockphoto.com/videos/unrecognizable-  -id1269207614" type="video/mp4" />
            <source src="https://denis-creative.com/wp-content/uploads/2018/01/video.ogv" type="video/ogv" />
            <source src="https://denis-creative.com/wp-content/uploads/2018/01/video.webm" type="video/webm" />
          </video>
  
          <div className={styles.main__header} data-aos="zoom-in"> 
            <div className={styles.main__header_logo} >
              <Image loader={() => "/header/logo.png?w=250"} src={"/header/logo.png"} width={250} height={67} alt="Логотип"  />
            </div>
            <div className={styles.main__header_container}>
             <div className={styles.main__header_contacts}>
               <span className={styles.main__header_call} onClick={() => handleOpenPopup('call')}>Заказать звонок</span>
               <span className={styles.main__header_phone}>8(800)3016650</span>
               <span className={styles.main__header_profile}  onClick={() => handleOpenPopup('profile')}>Личный кабинет</span>
             </div>
             <Navigation active='main' onClose={closeMobileMenu} />
            </div>
            <div className={styles.main__header_mobile}>
              <div className={styles.main__header_mobile_profile} onClick={() => handleOpenPopup('profile')}>
                <Image loader={() => "/icons/icon-person.svg?w=35"} src={"/icons/icon-person.svg"} width={35} height={35} alt="профаил" unoptimized  />
              </div>
              <button className={styles.main__header_mobile_menu} onClick={toggleMobileMenu}>
                <Image loader={() => "/icons/icon-menu.svg?w=35"} src={"/icons/icon-menu.svg"} width={35} height={35} alt="меню" unoptimized  />
              </button>

            </div>
          </div>
          <div className={styles.main__heading} data-aos={"zoom-in"}>
            <h1 className={styles.main__heading_title}>АДВОКАТ-LEX</h1>
            <h3 className={styles.main__heading_subtitle}>Юридическая компания</h3>
            <p className={styles.main__heading_text}>Получите помощь юриста или адвоката, осуществляющего свою деятельность в соответствующей Вашей проблеме области права</p>
            <a className={styles.main__heading_button} href="#consultation">Скорая юридическая помощь</a>
          </div>
          <div className={styles.main__heading_social_list} data-aos={"zoom-in"}>
            <div className={styles.main__heading_social_line}></div>
            <a className={styles.main__heading_social_item}>
              <Image loader={() => "/icons/icon-insta-gold.svg?w=31"} src={"/icons/icon-insta-gold.svg"} width={31} height={35} alt="инстаграм" />
            </a>
            <div className={styles.main__heading_social_item_youtube}>
              <Image loader={() => "/icons/icon-youtube-gold.svg?w=33"} src={"/icons/icon-youtube-gold.svg"} width={33} height={35} alt="ютуб" />
            </div>
            <div className={styles.main__heading_social_item}>
              <Image loader={() => "/icons/icon-phone-gold.svg?w=31"} src={"/icons/icon-phone-gold.svg"} width={31} height={35} alt="телефон" />
            </div>
            <div className={styles.main__heading_social_item}>
              <Image loader={() => "/icons/icon-whatsapp-gold.svg?w=31"} src={"/icons/icon-whatsapp-gold.svg"} width={31} height={35} alt="вотцап" />
            </div>
          </div>
          <a className={styles.main__heading_mouse} href="#victories" data-aos={"zoom-in"}>
            <Image loader={() => "/icons/mouse.png?w=28"} src={"/icons/mouse.png"} width={28} height={72} alt="мышка" />
          </a>
          <div className={styles.main__heading_works}>
            <a className={styles.main__heading_works_down} href="#victories">
              <Image loader={() => "/icons/icon_arrow_down.svg?w=10"} src={"/icons/icon_arrow_down.svg"} width={10} height={37} alt="стрелка" />
            </a>
            <p className={styles.main__heading_works_text}>Наша гордость - наши выигранные дела</p>
          </div>
        </section>

        <ScrollableAnchor id={'victories'}>
        <section className={styles.main__victories}>
          <div className={styles.main__victories_container} > 
            <Slider cases={cases} onOpenPopup={handleOpenPopup} />
          </div>
          <a className={styles.main__victories_button} data-aos={"zoom-in"}>Смотреть все дела</a>
        </section>
        </ScrollableAnchor>
        
        <ScrollableAnchor id={'about'}>
        <section className={styles.main__about}>
          <div className={styles.main__about_container} data-aos="zoom-in">
            <div className={styles.main__about_chapter}>
              <span className={styles.main__about_chapter_line}></span>
              О компании
            </div>
            <h2 className={styles.main__about_title}>Юридическая компания <span className={styles.main__about_title_large}>«Адвокат-LEX»</span></h2>
            <p className={styles.main__about_description}>Одним из важнейших направлений деятельности нашей юридической компании является профессиональное оказание юридических услуг гражданам (физическим лицам) и организациям (юридическим лицам). Юридическая компания «Адвокат-LEX» создана в 2005 году юристами-профессионалами в области гражданского, жилищного, семейного, пенсионного, наследственного, административного и уголовного права. </p>
            <Link href={'/articles'} passHref>
              <a className={styles.main__about_next}>Читать дальше&nbsp;&nbsp;
                <Image loader={() => "/icons/icon_arrow_right.svg?w=32"} src={"/icons/icon_arrow_down.svg"} width={32} height={10} alt="стрелка" />
              </a>
            </Link>
          </div>
          <div className={styles.main__about_femida} data-aos={"zoom-in"}>
            <Image loader={() => "/elements/femida2.png?w=382"} src={"/elements/femida2.png"} width={382} height={675} alt="фемида" />
          </div> 
          <div className={styles.main__about_femida_shadow}>
            <Image loader={() => "/elements/femida-shadow.png?w=236"} src={"/elements/femida-shadow.png"} width={236} height={101} alt="тень" />
          </div> 
          <div className={styles.main__about_vector_container}>
            <div className={styles.main__about_vector_circle}>
              <Image loader={() => "/elements/vector-circle.svg?w=649"} src={"/elements/vector-circle.svg"} width={649} height={595} alt="круг" />
            </div>
          </div>
        </section>
        </ScrollableAnchor>
        
        <ScrollableAnchor id={'consultation'}>
        <section className={styles.main__consultation}>
          <h2 className={styles.main__consultation_title} data-aos={"zoom-in"}>Запишитесь на консультацию</h2>
          <p className={styles.main__consultation_description} data-aos={"zoom-in"}>Оставьте заявку, чтобы наши специалисты связались с Вами и ответили на все интересующие Вас вопросы.</p>
          <form className={styles.main__consultation_form} >
            <input className={styles.main__consultation_form_input} type="tel" name="phone" placeholder="Телефон" required data-aos={"zoom-in"} />
            <button className={styles.main__consultation_form_button} type="submit" data-aos={"zoom-in"}>Оставить заявку</button>
            <div className={styles.main__consultation_form_icon} >
              <Image loader={() => "/icons/icon-speack.svg?w=247"} src={"/icons/icon-speack.svg"} width={247} height={255} alt="иконка" data-aos={"zoom-in"} />
            </div> 
          </form>
        </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'services'}>
        <section className={styles.main__services}>
          <div className={styles.main__services_vector_circle}>
            <Image loader={() => "/elements/vector-circle.svg?w=649"} src={"/elements/vector-circle.svg"} width={649} height={595} alt="круг" />
          </div>
          <div className={styles.main__services_chapter} data-aos={"zoom-in"}>
            <span className={styles.main__services_chapter_line}></span>
            Услуги
          </div>
          <h2 className={styles.main__services_title} data-aos={"zoom-in"}>Наши основные юридические услуги</h2>        
          <div className={styles.main__services_container} data-aos={"zoom-in"}>
            <ContainerWithTabsServices firstName="Для физических лиц" secondName="Для юридических лиц" />
              <Link href={'/#'} passHref>
                <a className={styles.main__services_container_button}>Перейти в раздел</a>
              </Link>
              {/* <div className={styles.main__services_container_icon}>
                <Image loader={() => "/icons/icon-services.svg?w=196"} src={"/icons/icon-services.svg"} width={196} height={196} alt="иконка" />
              </div>  */}
          </div>
          <div className={styles.main__services_mobile} data-aos={"zoom-in"}>
            <ContainerWithTabsServicesMobile />
          </div>
        </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'command'}>
        <section className={styles.main__command}>
          <div className={styles.main__command_chapter} data-aos={"zoom-in"}>
            <span className={styles.main__command_chapter_line}></span>
            Команда
          </div>
          <h2 className={styles.main__command_title} data-aos={"zoom-in"}>Познакомьтесь с нашими специалистами</h2>
          <p className={styles.main__command_description} data-aos={"zoom-in"}>Опыт и профессионализм наших адвокатов помогут разобраться в любой ситуации. Постоянный мониторинг за тенденциями законодательства, владение всеми изменениями и тщательность проработки каждого из них. Умение правильно подойти к проблеме делает результат еще лучше.</p>
          
          <ul className={styles.main__command_list} data-aos={"zoom-in"}>
            <li className={styles.main__command_card}>
              <div className={styles.main__command_card_person}>
                <Image loader={() => "/command/01.png?w=175"} src={"/command/01.png"} width={173} height={295} alt="юрист" />
              </div> 
              <h3 className={styles.main__command_card_name}>Александр Чайковский</h3>
              <p className={styles.main__command_card_position}>Адвокат</p>
            </li>

            <li className={styles.main__command_card}>
              <div className={styles.main__command_card_person}>
                <Image loader={() => "/command/02.png?w=178"} src={"/command/02.png"} width={178} height={290} alt="юрист" />
              </div> 
              <h3 className={styles.main__command_card_name}>Анастасия Анастасия</h3>
              <p className={styles.main__command_card_position}>Адвокат</p>
            </li>

            <li className={styles.main__command_card}>
              <div className={styles.main__command_card_person}>
                <Image loader={() => "/command/03.png?w=177"} src={"/command/03.png"} width={177} height={287} alt="юрист" />
              </div> 
              <h3 className={styles.main__command_card_name}>Андрей Андрей</h3>
              <p className={styles.main__command_card_position}>Адвокат</p>
            </li>

            <li className={styles.main__command_card}>
              <div className={`${styles.main__command_card_person} ${styles.main__command_card_person_4}`}>
                <Image loader={() => "/command/04.png?w=151"} src={"/command/03.png"} width={151} height={289} alt="юрист" />
              </div> 
              <h3 className={styles.main__command_card_name}>Анастасия Анастасия</h3>
              <p className={styles.main__command_card_position}>Адвокат</p>
            </li>
          </ul>
          <Link href={'/demo'} passHref >
              <a className={styles.main__command_button} data-aos={"zoom-in"}>Смотреть всю команду</a>
          </Link>
          <div className={styles.main__command_img}>
            <Image loader={() => "/elements/command.png?w=995"} src={"/elements/command.png"} width={995} height={475} alt="команда" data-aos={"zoom-in"} />
          </div> 
        </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={'contacts'}>
        <section className={styles.main__contacts}>
          <div className={styles.main__contacts_chapter} data-aos={"zoom-in"}>
            <span className={styles.main__contacts_chapter_line}></span>
            Контакты
          </div>
          <h2 className={styles.main__contacts_title} data-aos={"zoom-in"}>Наши офисы в Москве и <span className="mobile-br"><br></br></span>Санкт-Петербурге</h2>
          <div className={styles.main__contacts_container}>
            <div className={styles.main__contacts_container_data}>
              <h3 className={styles.main__contacts_container_data_subtitle} data-aos={"zoom-in"}>АДРЕСА в Санкт-Петербурге</h3>
              <div className={styles.main__contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.main__contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.main__contacts_container_data_text}>Петроградский район,<span className="mobile-br"><br></br></span> Малый Проспект П.С. д.32</p>
              </div>
              <div className={styles.main__contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.main__contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.main__contacts_container_data_text}>Приморский район,<span className="mobile-br"><br></br></span> пр-т Королева д.29, к.1</p>
              </div>
              <div className={styles.main__contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.main__contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.main__contacts_container_data_text}>Калининский район,<span className="mobile-br"><br></br></span> пр-т. Просвещения д.46, к.1</p>
              </div>
              <div className={styles.main__contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.main__contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.main__contacts_container_data_text} data-aos={"zoom-in"}>Московский район,<span className="mobile-br"><br></br></span> Московский пр-т. д.222</p>
              </div>
              <h3 className={`${styles.main__contacts_container_data_subtitle} ${styles.main__contacts_container_data_subtitle_30}`} data-aos={"zoom-in"}>АДРЕСА в Москве</h3>
              <div className={styles.main__contacts_container_data_item} data-aos={"zoom-in"}>
                <div className={styles.main__contacts_container_data_icon}>
                  <Image loader={() => "/icons/icon-adress.svg?w=24"} src={"/icons/icon-adress.svg"} width={24} height={24} alt="адрес" />
                </div> 
                <p className={styles.main__contacts_container_data_text}>проспект Вернадского д.78, с7</p>
              </div>
              <div className={styles.main__contacts_container_data_box} data-aos={"zoom-in"}>
                <div className={`${styles.main__contacts_container_data_icon} ${styles.main__contacts_container_data_icon_30}`}>
                  <Image loader={() => "/icons/icon-phone-white-big.svg?w=30"} src={"/icons/icon-phone-white-big.svg"} width={30} height={34} alt="адрес" />
                </div> 
                <h3 className={`${styles.main__contacts_container_data_subtitle} ${styles.main__contacts_container_data_subtitle_contact}`}>Телефон</h3>
              </div>
              <p className={styles.main__contacts_container_data_text_contact} data-aos={"zoom-in"}>8 800 301 6650</p>
              <div className={styles.main__contacts_container_data_box} data-aos={"zoom-in"}>
                <div className={`${styles.main__contacts_container_data_icon} ${styles.main__contacts_container_data_icon_30}`}>
                  <Image loader={() => "/icons/icon-email-white.svg?w=30"} src={"/icons/icon-email-white.svg"} width={30} height={34} alt="адрес" />
                </div> 
                <h3 className={styles.main__contacts_container_data_subtitle_contact}>E-MAIL</h3>
              </div>
              <p className={styles.main__contacts_container_data_text_contact} data-aos={"zoom-in"}>advokat-lex05@mail.ru</p>
              {/* <Link href={'/demo'} passHref> */}
                <button className={styles.main__contacts_button} onClick={() => handleOpenPopup('call')} data-aos={"zoom-in"}>Заказать звонок</button>
              {/* </Link> */}
            </div>
            <div className={styles.main__contacts_map} data-aos={"zoom-in"}>
              <ContainerWithTabsMap firstName="Санкт-Петербург" secondName="Москва" />
            </div> 


          </div>

            <div className={styles.main__contacts_mobile_map} data-aos={"zoom-in"}>
              <ContainerWithTabsMapMobile firstName="Санкт-Петербург" secondName="Москва" />
            </div> 
        </section>
        </ScrollableAnchor>
      </main>

      <footer className={styles.footer}>

        

        <div className={styles.footer__container} >
          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Меню
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                О компании
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#services" className={styles.footer__container_nav_link} >
                Услуги
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#command" className={styles.footer__container_nav_link} >
                Команда
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                Выигранные дела
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#contacts" className={styles.footer__container_nav_link} >
                Контакты
              </a>
            </li>
          </ul>  

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              Услуги
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#about" className={styles.footer__container_nav_link} >
                Для физ лиц
              </a>
            </li>
            <li className={styles.footer__container_nav_item}>
              <a href="#services" className={styles.footer__container_nav_link} >
                Для юр лиц
              </a>
            </li>
          </ul> 

          <ul className={styles.footer__container_nav}>
            <li className={`${styles.footer__container_nav_item} ${styles.footer__container_nav_bottom_21}`}> 
              <span className={styles.text_gradient}>Расписание</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Пн-Пт:</span> <span className={styles.text_white}>10:00 - 19:00</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Сб:</span>  <span className={styles.text_white}>11:00 - 17:00</span>
            </li>
            <li className={styles.footer__container_nav_item}>
              <span className={styles.text_gradient}>Вс:</span>  <span className={styles.text_white}>по записи</span>
            </li>
          </ul> 
          
          <div className={styles.footer__container_contacts}>
            <p className={styles.footer__container_contacts_email}>advokat-lex05@mail.ru</p>
            <p className={styles.footer__container_contacts_tel}>8 800 301 6650</p>
          </div>
        </div>

        <div className={styles.footer__container_bottom} >
          <p className={styles.footer__container_bottom_copyright}>© 2005-2022 Advokat-LEX</p>
          <ul className={styles.footer__container_bottom_social}>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={`${styles.footer__container_bottom_social_link} ${styles.footer__container_bottom_social_link_32}`}>
                <Image loader={() => "/icons/icon-insta-white.svg?w=32"} src={"/icons/icon-insta-white.svg"} width={32} height={32} alt="инстаграм" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={`${styles.footer__container_bottom_social_link} ${styles.footer__container_bottom_social_link_52}`}>
                <Image loader={() => "/icons/icon-youtube-white.svg?w=52"} src={"/icons/icon-youtube-white.svg"} width={52} height={45} alt="ютуб" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={styles.footer__container_bottom_social_link}>
                <Image loader={() => "/icons/icon-whatsapp-white.svg?w=38"} src={"/icons/icon-whatsapp-white.svg"} width={38} height={38} alt="вотцап" />
              </a>
            </li>
            <li className={styles.footer__container_bottom_social_item}>
              <a href="#" className={styles.footer__container_bottom_social_link}>
                <Image loader={() => "/icons/icon-phone-white.svg?w=38"} src={"/icons/icon-phone-white.svg"} width={38} height={38} alt="телефон" />
              </a>
            </li>
          </ul>

        </div>

      </footer>

      {
        isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
      }
      {/* {
        isOpenPopupPhone && <Popup onClose={closeMobileMenu} />
      } */}
      <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
      {/* <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name="profile" /> */}
      
    </MainLayout>
  )
}

export const getServerSideProps = async (context: any) => {
  
  //console.log('index process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)
  const mainPage = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/main-page?populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
   
    return res.data;
  })

  // const cases = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/won-cases?populate=*`)
  const cases = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/won-cases?populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log('error', e);
  })

  return {
    props: {
      logo: mainPage.attributes.logo,
      cases: cases
    }
  }
}
