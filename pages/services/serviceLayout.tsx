import { MainLayout } from "../../components/MainLayout";
import React, {Children, useContext} from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";
// import styles from '../../styles/services/main.module.scss';

export function ServiceLayout({ children }) {
  const { 
    handleOpenPopup, 
    closeMobileMenu, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
    namePopup 
  } = useContext(Context);

    return (
      <MainLayout 
        title={'Услуги для физических лиц | «Адвокат-LEX»'}
        description={'Услуги для физических лиц'}
      >
        <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='services' />
        
        {children}

        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
        }

      </MainLayout>

    )
}