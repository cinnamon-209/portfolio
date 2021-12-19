import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import Header from './header'
import HomePageContent from './homePage'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>CG portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePageContent/> 
        <Header/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            {" "}
          </span>
        </a>
      </footer>

    </div>
  )
}

export default Index
