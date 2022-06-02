import React, { FC, useState } from "react";

interface IThemeContext {
    handleOpenPopup?: (name?) => void;
    closeMobileMenu?: () => void;
    toggleMobileMenu?: () => void;
    isOpenMobileMenu?: boolean;
    isOpenPopup?: boolean;
    namePopup?: string;
  }
  
  const defaultState = {
    handleOpenPopup: () => false,
    closeMobileMenu: () => false,
    toggleMobileMenu: () => false,
    isOpenMobileMenu: false,
    isOpenPopup: false,
    namePopup: '',
  };

export const Context = React.createContext<Partial<IThemeContext>>(defaultState); 

export const PopupContext: FC = ({ children }) => {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [namePopup, setNamePopup] = useState('');

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
    <Context.Provider
      value={{
        handleOpenPopup, 
        closeMobileMenu, 
        toggleMobileMenu, 
        isOpenMobileMenu, 
        isOpenPopup, 
        namePopup
      }}
    >
      {children}
    </Context.Provider>
  );
};