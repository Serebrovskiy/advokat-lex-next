import Link from 'next/link';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Slider } from '../../components/Slider'
import styles from '../../styles/victories.module.scss';

export default function Victories({ cases, onOpenPopup }){
    return (
      <ScrollableAnchor id={'victories'}>
        <section className={styles.victories}>
          <div className={styles.victories_container} > 
            <Slider cases={cases} onOpenPopup={onOpenPopup} />
          </div>
          <Link href={'/victories'} passHref>
            <a className={styles.victories_button} data-aos={"zoom-in"}>Смотреть все дела</a>
          </Link>
          
        </section>
      </ScrollableAnchor>
    )
}