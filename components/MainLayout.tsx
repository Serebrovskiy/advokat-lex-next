/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link"
import Head from "next/head"
import styles from '../styles/main-layout.module.scss'

export function MainLayout({ 
  children, 
  title = 'Юридическая компания «Адвокат-LEX» в Санкт-Петербурге', 
  description = 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'
}){
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="keywords" content="Адвокат-LEX, юристы" />
        <meta name="description" content={ description } />
        <meta charSet="utf-8" />

        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet" /> */}

      </Head>
      
      <main>
        {children}
      </main>
    </>
  )
}