import Image from 'next/image';
import Link from "next/link";

import React, {Children, useContext, useState} from "react";

import stylesMain from '../../styles/victories/main.module.scss';
import stylesInner from '../../styles/victories/inner.module.scss';
import VictoriesPage from "./index";

export default function Inner({ services, cases, currentCase }) {
    // console.log('services', services)

    console.log('currentCase', currentCase)
   

    return (
        <VictoriesPage cases={cases} services={services} victories={undefined} category={currentCase.chapter}>
          <div className={stylesInner.victories_inner__container}>
            <h1 className={stylesInner.victories_inner__title}>{currentCase.title}</h1>
            <p className={stylesInner.victories_inner__text}>{currentCase.text}</p>
            <ul className={stylesInner.victories_inner__images}>
                {cases.map(item => {
                    return (
                       <li className={stylesInner.victories_inner__images__item}>

                       </li>
                    )
                })}
            </ul>
          </div> 
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