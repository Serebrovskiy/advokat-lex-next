import { NextPageContext } from "next";
import Link from "next/link" 
import Image from 'next/image';
import ReactMarkdown from 'react-markdown'
import { MainLayout } from "../../../components/MainLayout";
import ErrorPage from "../../404";
import styles from '../../../styles/articles.module.scss';

export default function Post({ post }){

  if(!post){
    return <ErrorPage />
  }

  console.log('post.img.data', post.img.data)

  const img = post.img.data;
  let src = process.env.API_URL;

  if(img){
    src += post.img.data.attributes.url;
  } 
  // const myLoader = ({ src, width, quality }) => {
  //   return `${process.env.API_URL}/${src}?w=${width}&q=${quality || 75}`
  // }
  
  return (
  <MainLayout 
    title={post.seo.title} 
    description={post.seo.description}
  >
    <div className={styles.post}>
      <h1>{post.title}</h1>
      {/* <section dangerouslySetInnerHTML={{__html: htmlContent}}></section> */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {img && 
        <div>
          <Image loader={() => src} src={src} width={245} height={133} alt='' />
        </div>
      }
      <Link href={'/articles'}><a>Вернуться к статьям</a></Link>
    </div>
  </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    slug: string
  }
}

//работает и на сервере и на клиенте
Post.getInitialProps = async ({ query, req, res }: PostNextPageContext) => {
  if(!query){
    return {post: null}
  }

  const post = await fetch(`${process.env.API_URL}/api/test-posts?filters[slug][$eq]=${query.slug}&populate=*`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })


  console.log('post', post[0])
  if(post[0]){
    return {
      post: post[0].attributes
    }
  }else{
    return {post: null};
  }

}