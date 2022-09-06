import Image from 'next/image';
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import React, { useContext, useState } from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";
import styles from '../../styles/reviews/main.module.scss';
import stylesInner from '../../styles/reviews/inner.module.scss';
import stylesMain from '../../styles/victories/main.module.scss';
import ReactMarkdown from 'react-markdown';


export default function ReviewPage({ reviews, review }) {

    const { 
        handleOpenPopup, 
        closeMobileMenu, 
        toggleMobileMenu, 
        isOpenPopup, 
        isOpenMobileMenu, 
        namePopup 
      } = useContext(Context);

      let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

    //   console.log('reviews', reviews)
    //   console.log('review', review)
    return (
        <MainLayout 
        title={'Отзывы | компания «Адвокат-LEX»'}
        description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
        >       
          <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='reviews' />

          <section className={`${stylesInner.reviews_inner}`}>

            <div className={`${stylesMain.victories_main__path} ${styles.reviews_main__path}`}>
              <Link href={`/`}>
                <a className={stylesMain.victories_main__path_text}>Главная &nbsp;&#62;&nbsp;&nbsp;</a>
              </Link>
              <Link href={`/reviews`}>
                <a className={stylesMain.victories_main__path_text}>Отзывы &nbsp;&#62;&nbsp;&nbsp;</a>
              </Link>
                <p className={stylesMain.victories_main__path_text}>Выигранное дело</p>
            </div>

            <div className={stylesInner.reviews_inner__container}>
              <div className={stylesInner.reviews_inner__title_container}>
                <div className={stylesInner.reviews_inner__img}>
                <Image loader={() => `${src+review.avatar.data.attributes.url}?w=192`} src={src+review.avatar.data.attributes.url} width={192} height={237} objectFit='cover' alt="аватар" />
                </div>
                <div className={stylesInner.reviews_inner__heading}>
                  <h1 className={stylesInner.reviews_inner__title}>{review.title}</h1>
                  <p className={stylesInner.reviews_inner__date}>{review.date ? review.date: review.createdAt.slice(0, -14)}</p>
                </div>
              </div>

              <div className={stylesInner.reviews_inner__text}>
                <ReactMarkdown>{review.content}</ReactMarkdown>
              </div>
              
              {review.case.data && 
                <ul className={stylesInner.reviews_inner__images}>
                    {review.case.data.map(item => { 
                        return (
                           <li className={stylesInner.reviews_inner__images__item} key={item.id} onClick={() => handleOpenPopup(`oneImage${JSON.stringify(item)}`)}>
                             <Image loader={() => `${src+item.attributes.url}?w=173`} src={src+item.attributes.url} width={173} height={277} alt='' />
                           </li>
                        )
                    })}
                </ul>
              } 

 
            </div> 
  
            <h2 className={stylesInner.reviews_inner__subtitle}>Другие отзывы:</h2>
  
  
            <ul className={styles.reviews_main__list}>
                {reviews.map((item, index) => {
                   if(index <= 2 && item.attributes.slug !== review.slug){ 
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

    const resReview = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews?filters[slug][$eq]=${query.slug}&populate=*`);
    const review = await resReview.json();

  return {
    props: {
        reviews: reviews.data?.sort(() => Math.random() - 0.5),
        review: review.data[0]?.attributes
    }
  }
}
