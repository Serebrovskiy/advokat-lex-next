import { ServiceLayout} from '../serviceLayout'
import styles from '../../../styles/services/main.module.scss';

export default function ServicesLegalPage() {

    return (
      <ServiceLayout>
        <p className={styles.services_main}>Услуги для юридических лиц</p>
      </ServiceLayout>
    )
}