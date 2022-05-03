import styles from '../styles/form.module.scss'

export function FormProfile(){
 
  return (
    <form className={styles.form}>
      <input className={styles.form__input} type="text" name="email" placeholder="email" required />
      <input className={styles.form__input} type="password" name="password" placeholder="password" required />
      <button className={styles.form__button} type="submit">Войти</button>
    </form>
  )
}