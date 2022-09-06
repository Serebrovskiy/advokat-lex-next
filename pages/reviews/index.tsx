import Image from 'next/image';
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";
import styles from '../../styles/reviews/main.module.scss';
import stylesMain from '../../styles/victories/main.module.scss';
import stylesUI from '../../styles/UI/ui.module.scss';


export default function ReviewsPage({ reviews }) {

    const [showPostsOnPage, setShowPostsOnPage] = useState(3);
    let conuntPosts = 0; 
    const { 
        handleOpenPopup, 
        closeMobileMenu, 
        toggleMobileMenu, 
        isOpenPopup, 
        isOpenMobileMenu, 
        namePopup 
      } = useContext(Context);

      let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

      const handleShowMorePosts = () => {
        console.log('showPostsOnPage', showPostsOnPage);  
        setShowPostsOnPage(showPostsOnPage + 3);  
      };

      //console.log('reviews', reviews)
    return (
        <MainLayout 
        title={'Отзывы | компания «Адвокат-LEX»'}
        description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
        >       
          <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='reviews' />

          <section className={`${styles.reviews_main}`}>

            <div className={`${stylesMain.victories_main__path} ${styles.reviews_main__path}`}>
              <Link href={`/`}>
                <a className={stylesMain.victories_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
              </Link>
              <p className={stylesMain.victories_main__path_text}>Отзывы</p>
            </div>

            <div className={styles.reviews_main__title_container}>
              <h1 className={styles.reviews_main__title}>Отзывы наших клиентов</h1>
              <div className={styles.reviews_main__icon_win}>
                <Image loader={() => `/icons/icon-reviews.png?w=75`} src={`/icons/icon-reviews.png`} width={75} height={103} alt="иконка" />
              </div>
            </div>

            <ul className={styles.reviews_main__list}>
              {reviews.map((item, index) => {
                 conuntPosts++;
                 if(conuntPosts <= showPostsOnPage){ 
                   return (  
                     <li className={styles.reviews_main__item} key={item.id}>
                       <div className={styles.reviews_main__item__img}>
                         <Image loader={() => `${src+item.attributes.avatar.data.attributes.url}?w=192`} src={src+item.attributes.avatar.data.attributes.url} width={192} height={237} objectFit='cover' alt="аватар" />
                       </div>
                       <div className={styles.reviews_main__item__container}>
                         <h3 className={styles.reviews_main__item__title}>{item.attributes.title}</h3>
                         <p className={styles.reviews_main__item__text}>{item.attributes.content}</p>
                         <div className={styles.reviews_main__item__bottom}>
                           <Link href={`/reviews/${item.attributes.slug}`}>
                             <a className={styles.reviews_main__item__btn}>Подробнее</a>
                           </Link>
                           <p className={styles.reviews_main__item__date}>{item.attributes.date ? item.attributes.date : item.attributes.createdAt.slice(0, -14)}</p>
                         </div>
                       </div>
                     </li>
                  )}})}
                { conuntPosts > showPostsOnPage && 
                  <div className={`${styles.reviews_main__show_more}`} onClick={() => handleShowMorePosts()}>
                    <p className={stylesUI.ui__show_more__text}>Смотреть еще</p>
                    <div className={stylesUI.ui__show_more__arrow}>
                      <Image loader={() => `/icons/arrow-down-white.svg?w=60`} src={'/icons/arrow-down-white.svg'} width={60} height={60} alt='' />
                    </div>
                  </div>
                }

            </ul>

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
  const resReviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews?populate=*`);
  const reviews = await resReviews.json();

  return {
    props: {
      reviews: reviews.data?.reverse()
    }
  }
}
