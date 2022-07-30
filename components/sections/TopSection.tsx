import { VideoBackground } from '../VideoBackground'
import Header from './Header'
import Greeting from './Greeting'
import styles from '../../styles/main/top-section.module.scss';

export default function TopSection({onOpenPopup, onClose, toggleMobileMenu, videoBackground}){
    return (
      <section className={styles.top_section}>
        <VideoBackground videoBackground={videoBackground} />
        <Header onOpenPopup={onOpenPopup} onClose={onClose} toggleMobileMenu={toggleMobileMenu} activePage="main" />
        <Greeting />
      </section>
    )
}