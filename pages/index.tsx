
import { useState } from 'react';

import { MainLayout } from '../components/MainLayout'
import { MobileMenu } from '../components/MobileMenu';
import { Popup } from '../components/Popup';

import TopSection from '../components/sections/TopSection'
import Victories from '../components/sections/Victories'
import About from '../components/sections/About'
import Consultation from '../components/sections/Consultation'
import Services from '../components/sections/Services'
import Command from '../components/sections/Command'
import Contacts from '../components/sections/Contacts'
import Footer from '../components/sections/Footer'

import "aos/dist/aos.css";
import styles from '../styles/Home.module.scss'


export default function Home({ cases }) {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [namePopup, setNamePopup] = useState('');

  if(!cases){
    console.error('Missing cases');
    // return <ErrorPage />
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

  return (
    <MainLayout 
      title={'Юридическая компания «Адвокат-LEX» в Санкт-Петербурге'}
      description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
    >
      <TopSection onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} />
      <Victories cases={cases} onOpenPopup={handleOpenPopup} />
      <About />
      <Consultation /> 
      <Services /> 
      <Command />
      <Contacts onOpenPopup={handleOpenPopup} />
      <Footer />
      <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
      {
        isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
      }
    </MainLayout>
  )
}

export const getServerSideProps = async (context: any) => {
  // for example
  // const mainPage = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/main-page?populate=*`)
  // .then(res => {
  //   return res.json();
  // })
  // .then(res => {
  //   return res.data;
  // })

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
      // logo: mainPage.attributes.logo,
      cases: cases
    }
  }
}
