import { VideoBackground } from '../VideoBackground'
import Header from './Header'
import Greeting from './Greeting'
import styles from '../../styles/top-section.module.scss';

export default function TopSection({onOpenPopup, onClose, toggleMobileMenu}){
    return (
      <section className={styles.top_section}>
        <VideoBackground />
        <Header onOpenPopup={onOpenPopup} onClose={onClose} toggleMobileMenu={toggleMobileMenu} />
        <Greeting />
      </section>
    )
}