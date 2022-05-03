import Image from 'next/image';
import styles from '../styles/form.module.scss'

export function FormImage({ caseData }){

  let data = caseData.slice(5);
  data = JSON.parse(data)
  //console.log('data', data)

  //let src = process.env.API_URL_LOCAL || 'http://localhost:1337';
  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';
  const imagesData = data.attributes.img.data;
  const title = data.attributes.title;

  console.log('imagesData', imagesData)

  return (
    <>
      <p className={styles.form__image_container_text}>{title}</p>
      {imagesData.map(item => (
       <div className={styles.form__image_container} key={item.id}> 
         <Image loader={() => `${src + item.attributes.url}?w=564`} 
         src={src + item.attributes.url} 
         width={564} 
         height={800} 
        //  sizes="(max-width: 1000px) 400px, 564px"
         alt=''
         />
       </div>
      ))}
    </>
  )
  
}