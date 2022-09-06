import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";
import Contacts from '../../components/sections/Contacts';


export default function ContactsPage() {
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
        title={'Контакты | компания «Адвокат-LEX»'}
        description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
        >       
          <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='contacts' />
          <Contacts onOpenPopup={handleOpenPopup} />
          <Footer />
          <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
          {
            isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
          }

        </MainLayout>

    )
}