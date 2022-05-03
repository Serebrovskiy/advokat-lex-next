import { useState, useEffect } from "react"
import Head from 'next/head'
import Link from "next/link"
import { MainLayout } from '../../components/MainLayout'
import styles from '../../styles/articles.module.scss'

export default function Articles({ posts: serverPosts }) {
 const [posts, setPosts] = useState(serverPosts);

 useEffect(() => {
   async function load() {
     const response = await fetch(`${process.env.API_URL}/posts`);
     const json = await response.json();
     setPosts(json);
  }
  if(!serverPosts){
    load();
    }
  }, []);

  return (
    <MainLayout 
      title={'Юридическая компания «Адвокат-LEX» в Санкт-Петербурге'}
      description={'Статьи'}
    >
      <div className={styles.container}>
        <h1>Статьи</h1>

        <ul>
        {posts.map(post => (
            <li key={post.id} className={styles.link}>
              <Link href={`/articles/post/${encodeURIComponent(post.attributes.slug)}`} > 
                <a>{post.attributes.title}</a>
              </Link>
            </li>
          ))}
      </ul>
      </div>
    </MainLayout>
  )
}

Articles.getInitialProps = async () => {
  const posts = await fetch(`${process.env.API_URL}/api/test-posts`)
  .then(res => {
    return res.json();
  })
  .then(res => {
    return res.data;
  })
  .catch(e => {
    console.log('error', e);
  })

 // console.log(posts);

  return {
    posts: posts,
  }
}