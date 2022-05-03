import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"
import styles from '../../styles/contact.module.scss'

interface ContactPageProps {
  title: string,
  phone: string,
  adress: string
}

export default function Contact({ title, phone, adress }:ContactPageProps) {
  const linkClickHandler = () => {
    Router.push('/');
  }

  return(
    <MainLayout 
      title={'Контакты'} 
    >
      <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{phone}</h3>
        <p>{adress}</p>
   
        {/* <button onClick={linkClickHandler}>На главную</button> */}
      </div>
    </MainLayout>
  )
}

Contact.getInitialProps = async () => {
  const contacts = await fetch(`${process.env.API_URL}/api/contacts-page?populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })

  console.log(contacts);

  return {
    title: contacts.attributes.title,
    phone: contacts.attributes.phone,
    adress: contacts.attributes.adress
  }
}