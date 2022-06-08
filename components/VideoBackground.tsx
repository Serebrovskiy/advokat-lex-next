import styles from '../styles/video-background.module.scss'

export function VideoBackground({ videoBackground }){

  let src = process.env.API_URL_LOCAL || 'http://194.67.92.119:1337';

  return (
    <video className={styles.video} autoPlay loop muted>
      <source src={src+videoBackground} type="video/mp4" />
      {/* <source src="https://media.istockphoto.com/videos/unrecognizable-  -id1269207614" type="video/mp4" /> */}
    </video>
  )
}