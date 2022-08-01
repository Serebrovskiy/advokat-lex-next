import Image from 'next/image';
import Link from "next/link";

import React, {Children, useContext, useState} from "react";

import stylesMain from '../../styles/articles/main.module.scss';
import stylesInner from '../../styles/articles/inner.module.scss';
import styles from '../../styles/services/inner.module.scss';
import ArticlesPage from "./index";
import { Context } from '../../popupsContext';
import ReactMarkdown from 'react-markdown';

export default function Inner({ services, articles, currentArticle }) {
    // console.log('articles', articles)
    let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

    console.log('currentArticle', currentArticle)
    const { 
        handleOpenPopup, 
        closeMobileMenu, 
        toggleMobileMenu, 
        isOpenPopup, 
        isOpenMobileMenu, 
        namePopup 
      } = useContext(Context);
   
    return (
        <ArticlesPage articles={articles} services={services} currentArticle={currentArticle}>
          <div className={stylesInner.articles_inner__container}>
            <div className={stylesInner.articles_inner__title_container}>
              <div className={stylesInner.articles_inner__img}>
                <Image loader={() => `${src+currentArticle.img.data.attributes.url}?w=382`} src={src+currentArticle.img.data.attributes.url} width={382} height={255} alt='' />
              </div>
              <h1 className={stylesInner.articles_inner__title}>{currentArticle.title}</h1>
            </div>

            <div className={stylesInner.articles_inner__text}>
              <ReactMarkdown>{currentArticle.content}</ReactMarkdown>
            </div>
 
          </div> 

          <h2 className={stylesInner.articles_inner__subtitle}>Другие статьи:</h2>

        </ArticlesPage>
    )
}

export const getServerSideProps = async ({ query, req }) => {
    const resServices = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
    const services = await resServices.json();
  
    const resArticles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*`);
    const articles = await resArticles.json();

    const resArticle = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?filters[slug][$eq]=${query.slug}&populate=*`);
    const currentArticle = await resArticle.json();
  
    return {
      props: {
        services: services.data,
        articles: articles.data,
        currentArticle: currentArticle.data[0].attributes
      }
    }
  }