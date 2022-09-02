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
import stylesMain from '../../styles/articles/main.module.scss';
import stylesUI from '../../styles/UI/ui.module.scss';
import ReactMarkdown from 'react-markdown';

export default function ArticlesPage({services, articles, children, currentArticle }) {
  const { 
    handleOpenPopup, 
    closeMobileMenu, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
    namePopup 
  } = useContext(Context);

  const [categoryFilter, setCategoryFilter] = useState(currentArticle ? currentArticle.chapter : 'ВЕСЬ АРХИВ');
  const [currentCategory, setCurrentCategory] = useState(currentArticle ? currentArticle.chapter : '');
  const [showPostsOnPage, setShowPostsOnPage] = useState(3);
  let conuntPosts = 0; //счетчик постов для внутренних страниц

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
    console.log('showPostsOnPage', showPostsOnPage);  
    setShowPostsOnPage(showPostsOnPage + 3);  
  };

  //console.log('currentCase', currentCase )
  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

  return (
    <MainLayout 
    title={currentArticle ? `«Адвокат-LEX» | ${currentArticle.title}` : 'Полезная информация | компания «Адвокат-LEX»'}
    description={currentArticle ? currentArticle.content : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
    >
      <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='articles' />

      <section className={`${stylesMain.articles_main}`}>
          <div className={stylesMain.articles_main__path}>
            <Link href={`/`}>
              <a className={stylesMain.articles_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
            </Link>
            <Link href={`/articles`} > 
              <a className={stylesMain.articles_main__path_text}>Статьи</a>
            </Link>
            {currentArticle && <p className={`${stylesMain.articles_main__path_text} ${stylesMain.articles_main__path_text_default}`}> &nbsp;&#62;&nbsp;&nbsp;{currentArticle.chapter}</p>}
          </div>
          <div className={stylesMain.articles_main__container}>
            <ul className={`${styles.services_inner__nav} ${stylesMain.articles_main__nav}`}>
                  <li> 
                    <Link href={`/articles`} > 
                      <div className={`${styles.services_inner__nav_item} ${categoryFilter == 'ВЕСЬ АРХИВ' ? styles.services_inner__nav_item_active : ''}`} onClick={() => onChangeCategoryFilter('ВЕСЬ АРХИВ')}>
                        <div className={`${styles.services_inner__nav_item_img} `}>
                        {categoryFilter == 'ВЕСЬ АРХИВ' ?
                          <Image loader={() => `/victories/all-archive-victories-select.svg?w=38`} src={`/victories/all-archive-victories-select.svg`} width={38} height={30} alt="иконка" />
                          :
                          <Image loader={() => `/victories/all-archive-victories.svg?w=38`} src={`/victories/all-archive-victories.svg`} width={38} height={30} alt="иконка" />  
                        }
                          </div>
                        <p className={styles.services_inner__nav_item_text}>ВЕСЬ АРХИВ</p>
                        <p className={`${stylesMain.articles_main__nav_item_text_color} ${categoryFilter == 'ВЕСЬ АРХИВ' && stylesMain.articles_main__nav_item_text_color_active}`}>{articles.length}&nbsp;шт</p>
                      </div>
                    </Link>
                  </li>
                {
                   services.map((item) => {
                      return ( 
                        <li key={item.id}>
                          <div onClick={() => onChangeCategoryFilter(item.attributes.title)} className={`${styles.services_inner__nav_item} ${stylesMain.articles_main__nav_item} ${categoryFilter == item.attributes.title ? styles.services_inner__nav_item_active : ''}`}> 
                            <div className={styles.services_inner__nav_item_img}>
                              <Image loader={() => `${src+item.attributes.icon.data.attributes.url}?w=38`} src={`${src+item.attributes.icon.data.attributes.url}`} width={38} height={30} alt="иконка" />
                            </div>
                              <p className={styles.services_inner__nav_item_text}>{item.attributes.title}</p>
                          </div>
                        </li>
                  )})
                }
              </ul>
              <div className={stylesMain.articles_main__content_container}>

                { //активирует внутреннюю страницу
                  (categoryFilter == currentCategory) && children                                
                }
                
                { //убирает заголовок при включении внутренней страницы
                  !currentCategory 
                  &&
                  <div className={stylesMain.articles_main__title_container}>
                    <h1 className={stylesMain.articles_main__title}>Полезная информация</h1>
                    <div className={stylesMain.articles_main__icon_article}>
                      <Image loader={() => `/articles/icon-article.png?w=99`} src={`/articles/icon-article.png`} width={99} height={90} alt="иконка" />
                    </div>
                  </div>
                }
                <ul className={stylesMain.articles_main__content}>
                 {articles.map((item, index) => {
                  const currentArticleSlug = currentArticle ? currentArticle.slug : ''
                  if((((categoryFilter == item.attributes.chapter) && 
                  (currentArticleSlug !=item.attributes.slug)) || 
                  categoryFilter == 'ВЕСЬ АРХИВ')){
                  
                  if(typeof window !== "undefined" && window.innerWidth < 768){    //for mobile
                    console.log('showPostsOnPage', showPostsOnPage)
                    conuntPosts++;
                    if(conuntPosts <= showPostsOnPage){ 
                      return (  
                        <li className={stylesMain.articles_main__content_item} key={item.id}>
                          <div className={stylesMain.articles_main__content_item_img}>
                            <Image loader={() => `${src+item.attributes.img.data.attributes.url}?w=275`} src={src+item.attributes.img.data.attributes.url} width={275} height={280} objectFit='cover' alt='' />
                          </div>
                          <div className={stylesMain.articles_main__content_item_container}>
                            <h3 className={stylesMain.articles_main__content_item_title}>{item.attributes.title}</h3>
                            <p className={stylesMain.articles_main__content_item_text}>{item.attributes.content}</p>
                            {/* <div className={stylesMain.articles_main__content_item_text}><ReactMarkdown>{item.attributes.content}</ReactMarkdown></div> */}
                            <Link href={`/articles/${item.attributes.slug}`} >
                              <a className={stylesMain.articles_main__content_item_btn} onClick={() => onChangeCurrentCategory(item.attributes.chapter)}>Подробнее</a>
                            </Link>
                          </div>
                        </li>
                        )}}else{  //for desctop
                          return (  
                            <li className={stylesMain.articles_main__content_item} key={item.id}>
                              <div className={stylesMain.articles_main__content_item_img}>
                                <Image loader={() => `${src+item.attributes.img.data.attributes.url}?w=275`} src={src+item.attributes.img.data.attributes.url} width={275} height={280} objectFit='cover' alt='' />
                              </div>
                              <div className={stylesMain.articles_main__content_item_container}>
                                <h3 className={stylesMain.articles_main__content_item_title}>{item.attributes.title}</h3>
                                <p className={stylesMain.articles_main__content_item_text}>{item.attributes.content}</p>
                                <Link href={`/articles/${item.attributes.slug}`} >
                                  <a className={stylesMain.articles_main__content_item_btn} onClick={() => onChangeCurrentCategory(item.attributes.chapter)}>Подробнее</a>
                                </Link>
                              </div>
                            </li>
                    )}}})}
                </ul>
                { conuntPosts > showPostsOnPage &&  //articles.length
                  <div className={stylesUI.ui__show_more} onClick={() => handleShowMorePosts()}>
                    <p className={stylesUI.ui__show_more__text}>Смотреть еще</p>
                    <div className={stylesUI.ui__show_more__arrow}>
                      <Image loader={() => `/icons/arrow-down-white.svg?w=60`} src={'/icons/arrow-down-white.svg'} width={60} height={60} alt='' />
                    </div>
                  </div>
                }
              </div>
            </div>

            {/* сделать отдельным компанентом */}
            <div className={styles.services_inner__bottom_container}>
              <h3 className={styles.services_inner__subtitle}>Со стоимостью юридических услуг Вы можете ознакомиться в разделе «Прайс-лист»</h3>
              <div className={styles.services_inner__price_container}>
                <span className={styles.services_inner__line}></span>
                <button className={styles.services_inner__btn_price}>Прайс-лист</button>
                <span className={styles.services_inner__line}></span>
              </div>
              <p className={styles.services_inner__text}>Юристы компании «Адвокат-Лекс» помогут решить Вашу проблему, какой бы сложной она ни была!</p>
              <p className={styles.services_inner__text}>С нами Ваша правда под нашей защитой! А закон на Вашей стороне! Решение есть! Ждем Вас!</p>
              <button className={styles.services_inner__btn_contacts}>Наши контакты</button>
            </div>
            {/* сделать отдельным компанентом */}
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

  const resArticles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*`);
  const articles = await resArticles.json();

  return {
    props: {
      services: services.data,
      articles: articles?.data.reverse()
      // service: service.data[0].attributes
    }
  }
}