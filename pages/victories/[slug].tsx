import Image from 'next/image';
import Link from "next/link";

import React, {Children, useContext, useState} from "react";

import stylesMain from '../../styles/victories/main.module.scss';
import stylesInner from '../../styles/victories/inner.module.scss';
import VictoriesPage from "./index";
import { Context } from '../../popupsContext';
import ReactMarkdown from 'react-markdown';

export default function Inner({ services, cases, currentCase }) {
    // console.log('services', services)
    let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

    //console.log('currentCase', currentCase)
    const { 
        handleOpenPopup, 
        closeMobileMenu, 
        toggleMobileMenu, 
        isOpenPopup, 
        isOpenMobileMenu, 
        namePopup 
      } = useContext(Context);
   
    return (
        <VictoriesPage cases={cases} services={services} currentCase={currentCase}>
          <div className={stylesInner.victories_inner__container}>
            <h1 className={stylesInner.victories_inner__title}>{currentCase.title}</h1>
            <div className={stylesInner.victories_inner__text}><ReactMarkdown>{currentCase.content}</ReactMarkdown></div>
            <ul className={stylesInner.victories_inner__images}>
                {currentCase.img.data.map(item => { 
                    return (
                       <li className={stylesInner.victories_inner__images__item} key={item.id} onClick={() => handleOpenPopup(`oneImage${JSON.stringify(item)}`)}>
                         <Image loader={() => `${src+item.attributes.url}?w=173`} src={src+item.attributes.url} width={173} height={277} alt='' />
                       </li>
                    )
                })}
            </ul>
          </div> 

          <h2 className={stylesInner.victories_inner__subtitle}>Другие выигранные дела:</h2>
        </VictoriesPage>
    )
}

export const getServerSideProps = async ({ query, req }) => {
    const resServices = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`);
    const services = await resServices.json();
  
    const resCases = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/won-cases?populate=*`);
    const cases = await resCases.json();

    const resCase = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/won-cases?filters[slug][$eq]=${query.slug}&populate=*`);
    const currentCase = await resCase.json();
  
    return {
      props: {
        services: services.data,
        cases: cases.data,
        currentCase: currentCase.data[0].attributes
        // service: service.data[0].attributes
      }
    }
  }