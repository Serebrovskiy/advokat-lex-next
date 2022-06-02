import { ServiceLayout } from "../serviceLayout";
import styles from '../../../styles/services/main.module.scss';

export default function ServicesPhysicalPage() {

    return (
      <ServiceLayout>
        <p className={styles.services_main}>Услуги для физических лиц</p>
      </ServiceLayout>
    )
}