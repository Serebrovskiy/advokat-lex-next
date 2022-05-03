import styles from '../../styles/demo.module.scss'
import Image from 'next/image';
import src2 from '../../img/logo2.png'
export default function Demo() {
  //const img = post.img.data;
  let src = '/img/logo2.png';

  // if(img){
  //  src += post.img.data.attributes.url;
  // } 

  return(
      <div className={styles.demo}>
        <div className={styles.demo__header}>
          {/* <Image className={styles.demo__heder_logo}  src={src2} width={250} height={67} alt='' /> */}
          <div className={styles.demo__heder_logo}>ф</div>
        </div>
      </div>
  )
}