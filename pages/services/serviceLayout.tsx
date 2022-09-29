import { MainLayout } from "../../components/MainLayout";
import React, {Children, useContext} from "react";
import Header from "../../components/sections/Header";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Footer from "../../components/sections/Footer";
import { FormCallRequest } from "../../components/form/FormCallRequest";

export default function ServiceLayout({ children, service }) {
  const { 
    handleOpenPopup, 
    closeMobileMenu, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
    namePopup 
  } = useContext(Context);

  //  console.log('service', service )
  
    return (
      <MainLayout 
        title={service ? service.title : 'Юридические услуги | компания «Адвокат-LEX»'}
        description={service ? service.description : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header onOpenPopup={handleOpenPopup} onClose={closeMobileMenu} toggleMobileMenu={toggleMobileMenu} activePage='services' />
        
        {children}

        <FormCallRequest />
        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeMobileMenu} name={namePopup} />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeMobileMenu} />
        }

      </MainLayout>

    )
}