import styles from '../styles/video-background.module.scss'

export function VideoBackground(){

  return (
    <video className={styles.video} autoPlay loop muted>
      <source src="https://media.istockphoto.com/videos/unrecognizable-  -id1269207614" type="video/mp4" />
      <source src="https://denis-creative.com/wp-content/uploads/2018/01/video.ogv" type="video/ogv" />
      <source src="https://denis-creative.com/wp-content/uploads/2018/01/video.webm" type="video/webm" />
    </video>
  )
}