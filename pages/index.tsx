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
      <>
          {
              homePage != undefined || homePage != null ?

    <div className={styles.container}>
      <Head>
        <title>{"CG's portfolio"}</title>
        <meta name="description" content="CG's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePageContent data={homePage}/>
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
    </div> : ""
          }
      </>
  )
}

export default Index



export async function getServerSideProps() {
  // one query to rule them all 
  const { data } = await client.query({
    query: gql`
    query {
      homeCollection(where :{name: "Chuan Geng"}) {
        items {
          name
          title
          shortBio
          email
          github
          linkedin
          image {
            url
          }
        }
      }
    }
    `,
  })

  return {
    props: {
      homePage: data.homeCollection.items[0],
    },
  };
}