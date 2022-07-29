import Image from 'next/image';
import styles from '../styles/form.module.scss'

export function FormImage({ caseData }){

  let data = caseData.slice(8);
  data = JSON.parse(data)
 // console.log('data', data)

  //let src = process.env.API_URL_LOCAL || 'http://localhost:1337';
  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';
  const imageUrl = data.attributes.url;

  //console.log('imageUrl', imageUrl) 
  return (
    <div className={styles.form__one__container}>
      <div className={`${styles.form__one__image}`}> 
        <Image loader={() => `${src + imageUrl}?w=564`} 
        src={src + imageUrl} 
        width={750} 
        height={1000} 
        alt=''
        />
      </div>
    </div>
  )  
}