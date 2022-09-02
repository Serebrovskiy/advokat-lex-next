import Image from 'next/image';
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import React, {Children, useContext, useEffect, useState} from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";

import styles from '../../styles/services/inner.module.scss';
import stylesMain from '../../styles/victories/main.module.scss';
import stylesUI from '../../styles/UI/ui.module.scss';


export default function VictoriesPage({ services, cases, children, currentCase }) {
  const { 
    handleOpenPopup, 
    closeMobileMenu, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
    namePopup 
  } = useContext(Context);

  const [categoryFilter, setCategoryFilter] = useState(currentCase ? currentCase.chapter : 'ВЕСЬ АРХИВ');
  const [currentCategory, setCurrentCategory] = useState(currentCase ? currentCase.chapter : '');//
  const [showPostsOnPage, setShowPostsOnPage] = useState(3);
  let conuntPosts = 0; 

  const onChangeCategoryFilter = (nameCategory) => {
   // console.log('nameCategory', nameCategory)
      setCategoryFilter(nameCategory);
  };

  const onChangeCurrentCategory = (category) => {
  //  console.log('category', category)
    setCategoryFilter(category);
    setCurrentCategory(category);
  };
  const handleShowMorePosts = () => {
    console.log('showPostsOnPage', showPostsOnPage)
    setShowPostsOnPage(showPostsOnPage + 3);
  }

  //console.log('currentCase', currentCase )
  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';
  
    return (
      <MainLayout 
         title={currentCase ? `«Адвокат-LEX» | ${currentCase.title}` : 'Юридические услуги | компания «Адвокат-LEX»'}
         description={currentCase ? currentCase.content : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='victories' />
        <section className={`${stylesMain.victories_main}`}>
          <div className={stylesMain.victories_main__path}>
            <Link href={`/`}>
              <a className={stylesMain.victories_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
            </Link>
            <Link href={`/victories`} > 
              <a className={stylesMain.victories_main__path_text}>Выигранные дела</a>
            </Link>
            {currentCase && <p className={`${stylesMain.victories_main__path_text} ${stylesMain.victories_main__path_text_default}`}> &nbsp;&#62;&nbsp;&nbsp;{currentCase.chapter}</p>}
          </div>
          <div className={stylesMain.victories_main__container}>
            <ul className={`${styles.services_inner__nav} ${stylesMain.victories_main__nav}`}>
                  <li> 
                    <Link href={`/victories`} > 
                      <div className={`${styles.services_inner__nav_item} ${categoryFilter == 'ВЕСЬ АРХИВ' ? styles.services_inner__nav_item_active : ''}`} onClick={() => onChangeCategoryFilter('ВЕСЬ АРХИВ')}>
                        <div className={`${styles.services_inner__nav_item_img} `}>
                        {categoryFilter == 'ВЕСЬ АРХИВ' ?
                          <Image loader={() => `/victories/all-archive-victories-select.svg?w=38`} src={`/victories/all-archive-victories-select.svg`} width={38} height={30} alt="иконка" />
                          :
                          <Image loader={() => `/victories/all-archive-victories.svg?w=38`} src={`/victories/all-archive-victories.svg`} width={38} height={30} alt="иконка" />  
                        }
                          </div>
                        <p className={styles.services_inner__nav_item_text}>ВЕСЬ АРХИВ</p>
                        <p className={`${stylesMain.victories_main__nav_item_text_color} ${categoryFilter == 'ВЕСЬ АРХИВ' && stylesMain.victories_main__nav_item_text_color_active}`}>{cases.length}&nbsp;шт</p>
                      </div>
                    </Link>
                  </li>
                {
                   services.map((item) => {
                      return ( 
                        <li key={item.id}>
                          <div onClick={() => onChangeCategoryFilter(item.attributes.title)} className={`${styles.services_inner__nav_item} ${stylesMain.victories_main__nav_item} ${categoryFilter == item.attributes.title ? styles.services_inner__nav_item_active : ''}`}> 
                            <div className={styles.services_inner__nav_item_img}>
                              <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=38`} src={`${src+item.attributes.icon.data.attributes.url}`} width={38} height={30} alt="иконка" />
                            </div>
                              <p className={styles.services_inner__nav_item_text}>{item.attributes.title}</p>
                          </div>
                        </li>
                  )})
                }
                  <li>
                    <Link href={`/review`}> 
                      <a className={`${styles.services_inner__nav_item}`}>
                        <div className={stylesMain.victories_main__nav_item_img}>
                          <Image loader={() => `/victories/review-icon.png?w=42`} src={`/victories/review-icon.png`} width={42} height={58} alt="иконка" />
                        </div>
                        <p className={stylesMain.victories_main__nav_item_text}>Отзывы наших клиентов</p>
                      </a>
                    </Link>
                  </li>
              </ul>

              <div className={stylesMain.victories_main__content_container}>
              
                { //активирует внутреннюю страницу
                  (categoryFilter == currentCategory) && children                                
                }
                
                { //убирает заголовок при включении внутренней страницы
                  !currentCategory 
                  &&
                  <div className={stylesMain.victories_main__title_container}>
                    <h1 className={stylesMain.victories_main__title}>Выигрынные дела</h1>
                    <div className={stylesMain.victories_main__icon_win}>
                      <Image loader={() => `/victories/win.png?w=84`} src={`/victories/win.png`} width={84} height={100} alt="иконка" />
                    </div>
                    <p className={stylesMain.victories_main__subtitle}>{categoryFilter}</p>
                  </div>
                }
              <ul className={stylesMain.victories_main__content}>
                {cases.map((item, index) => {
                  const currentCaseSlug = currentCase ? currentCase.slug : '';
                  if((((categoryFilter == item.attributes.chapter) && 
                  (currentCaseSlug !=item.attributes.slug)) || 
                  categoryFilter == 'ВЕСЬ АРХИВ')){
                    //console.log('1', item.attributes.slug) 
                    if(typeof window !== "undefined" && window.innerWidth < 768){  
                      conuntPosts++;  
                      if(conuntPosts <= showPostsOnPage){                            
                        return (  
                          <li className={stylesMain.victories_main__content_item} key={item.id}>
                            <div className={stylesMain.victories_main__content_item_img}>
                              <Image loader={() => `${src+item.attributes.img.data[0].attributes.url}?w=192`} src={src+item.attributes.img.data[0].attributes.url} width={192} height={280} alt='' />
                            </div>
                            <div className={stylesMain.victories_main__content_item_container}>
                              <h3 className={stylesMain.victories_main__content_item_title}>{item.attributes.title}</h3>
                              <p className={stylesMain.victories_main__content_item_text}>{item.attributes.content}</p>
                              <Link href={`/victories/${item.attributes.slug}`} >
                                <a className={stylesMain.victories_main__content_item_btn} onClick={() => onChangeCurrentCategory(item.attributes.chapter)}>Подробнее</a>
                              </Link>
                            </div>
                          </li>
                          )}}else{
                          return (  
                          <li className={stylesMain.victories_main__content_item} key={item.id}>
                            <div className={stylesMain.victories_main__content_item_img}>
                              <Image loader={() => `${src+item.attributes.img.data[0].attributes.url}?w=192`} src={src+item.attributes.img.data[0].attributes.url} width={192} height={280} alt='' />
                            </div>
                            <div className={stylesMain.victories_main__content_item_container}>
                              <h3 className={stylesMain.victories_main__content_item_title}>{item.attributes.title}</h3>
                              <p className={stylesMain.victories_main__content_item_text}>{item.attributes.content}</p>
                              <Link href={`/victories/${item.attributes.slug}`} >
                                <a className={stylesMain.victories_main__content_item_btn} onClick={() => onChangeCurrentCategory(item.attributes.chapter)}>Подробнее</a>
                              </Link>
                            </div>
                          </li>
                      )}}})};
              </ul>
              {conuntPosts > showPostsOnPage && 
                <div className={stylesUI.ui__show_more} onClick={() => handleShowMorePosts()}>
                  <p className={stylesUI.ui__show_more__text}>Смотреть еще</p>
                  <div className={stylesUI.ui__show_more__arrow}>
                    <Image loader={() => `/icons/arrow-down-white.svg?w=60`} src={'/icons/arrow-down-white.svg'} width={60} height={60} alt='' />
                  </div>
                </div>
                }
            </div>
          </div>
        <div className={stylesMain.victories_main__bottom_blur}></div>
        </section>

        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
        }

      </MainLayout>

    )
}

export const getServerSideProps = async ({ query, req }) => {
  const resServices = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
  const services = await resServices.json();

  const resCases = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/won-cases?populate=*`);
  const cases = await resCases.json();

  return {
    props: {
      services: services.data,
      cases: cases.data?.reverse()
      // service: service.data[0].attributes
    }
  }
}

