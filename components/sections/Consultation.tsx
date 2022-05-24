import Image from 'next/image';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/consultation.module.scss';

export default function Consultation(){
    return (
    <ScrollableAnchor id={'consultation'}>
      <section className={styles.consultation}>
        <h2 className={styles.consultation_title} data-aos={"zoom-in"}>Запишитесь на консультацию</h2>
        <p className={styles.consultation_description} data-aos={"zoom-in"}>Оставьте заявку, чтобы наши специалисты связались с Вами и ответили на все интересующие Вас вопросы.</p>
        <form className={styles.consultation_form} >
          <input className={styles.consultation_form_input} type="tel" name="phone" placeholder="Телефон" required data-aos={"zoom-in"} />
          <button className={styles.consultation_form_button} type="submit" data-aos={"zoom-in"}>Оставить заявку</button>
          <div className={styles.consultation_form_icon} >
            <Image loader={() => "/icons/icon-speack.svg?w=247"} src={"/icons/icon-speack.svg"} width={247} height={255} alt="иконка" data-aos={"zoom-in"} />
          </div> 
        </form>
      </section>
    </ScrollableAnchor>
    )
}