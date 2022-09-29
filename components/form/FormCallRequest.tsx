import Image from 'next/image';
import React from 'react';
import styles from '../../styles/UI/ui.module.scss';

export function FormCallRequest(){

    
    return (
      <section className={styles.ui__form_call_request}>
        <h2 className={styles.ui__form_call_request_title}>Запишитесь на консультацию</h2>
        <p className={styles.ui__form_call_request_description}>Получите помощь юриста или адвоката, осуществляющего свою деятельность в соответствующей Вашей проблеме области права</p>
        <form className={styles.ui__form_call_request_form} >
          <input className={styles.ui__form_call_request_form_input} type="tel" name="phone" placeholder="Телефон" required/>
          <button className={styles.ui__form_call_request_form_button} type="submit" >Оставить заявку</button>
          <div className={styles.ui__form_call_request_form_icon} >
            <Image loader={() => "/icons/icon-speack.svg?w=247"} src={"/icons/icon-speack.svg"} width={247} height={255} alt="иконка" />
          </div> 
        </form>
      </section>
    )
}