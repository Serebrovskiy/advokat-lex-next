import styles from '../styles/form.module.scss'

export function FormCall(){

  return (
    <form className={styles.form}>
      <input className={styles.form__input} type="tel" name="phone" placeholder="Телефон" required />
      <button className={styles.form__button} type="submit">Заказать звонок</button>
    </form>
  )
}