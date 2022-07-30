import Image from 'next/image';
import Link from "next/link";
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from '../../styles/main/command.module.scss';

export default function Command(){
    return (
      <ScrollableAnchor id={'command'}>
        <section className={styles.command}>
          <div className={styles.command_chapter} data-aos={"zoom-in"}>
            <span className={styles.command_chapter_line}></span>
            Команда
          </div>
          <h2 className={styles.command_title} data-aos={"zoom-in"}>Познакомьтесь с нашими специалистами</h2>
          <p className={styles.command_description} data-aos={"zoom-in"}>Опыт и профессионализм наших адвокатов помогут разобраться в любой ситуации. Постоянный мониторинг за тенденциями законодательства, владение всеми изменениями и тщательность проработки каждого из них. Умение правильно подойти к проблеме делает результат еще лучше.</p>
          
          <ul className={styles.command_list} data-aos={"zoom-in"}>
            <li className={styles.command_card}>
              <div className={styles.command_card_person}>
                <Image loader={() => "/command/01.png?w=175"} src={"/command/01.png"} width={173} height={295} alt="юрист" />
              </div> 
              <h3 className={styles.command_card_name}>Александр Чайковский</h3>
              <p className={styles.command_card_position}>Адвокат</p>
            </li>

            <li className={styles.command_card}>
              <div className={styles.command_card_person}>
                <Image loader={() => "/command/02.png?w=178"} src={"/command/02.png"} width={178} height={290} alt="юрист" />
              </div> 
              <h3 className={styles.command_card_name}>Анастасия Анастасия</h3>
              <p className={styles.command_card_position}>Адвокат</p>
            </li>

            <li className={styles.command_card}>
              <div className={styles.command_card_person}>
                <Image loader={() => "/command/03.png?w=177"} src={"/command/03.png"} width={177} height={287} alt="юрист" />
              </div> 
              <h3 className={styles.command_card_name}>Андрей Андрей</h3>
              <p className={styles.command_card_position}>Адвокат</p>
            </li>

            <li className={styles.command_card}>
              <div className={`${styles.command_card_person} ${styles.command_card_person_4}`}>
                <Image loader={() => "/command/04.png?w=151"} src={"/command/03.png"} width={151} height={289} alt="юрист" />
              </div> 
              <h3 className={styles.command_card_name}>Анастасия Анастасия</h3>
              <p className={styles.command_card_position}>Адвокат</p>
            </li>
          </ul>
          <Link href={'/demo'} passHref >
            <a className={styles.command_button} data-aos={"zoom-in"}>Смотреть всю команду</a>
          </Link>
          <div className={styles.command_img}>
            <Image loader={() => "/elements/command.png?w=995"} src={"/elements/command.png"} width={995} height={475} alt="команда" data-aos={"zoom-in"} />
          </div> 
        </section>
      </ScrollableAnchor>
    )
}