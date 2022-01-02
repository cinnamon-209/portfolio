import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import Header from './header'
import HomePageContent from './homePage'
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client";

const Index: NextPage = ({homePage} : any) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>{"CG's portfolio"}</title>
        <meta name="description" content="CG's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePageContent homePageContent={homePage}/> 
        <Header/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by 
          <span className={styles.vercelLogo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer>

    </div>
  )
}

export default Index



export async function getServerSideProps() {
  // one query to rule them all 
  const { data } = await client.query({
    query: gql`
      query {
        homePage(id:1){
          about
          profilePic {
            url
          }
        }
      }
    `,
  })

  return {
    props: {
      homePage: data.homePage,
    },
  };
}