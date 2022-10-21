import styled from '@emotion/styled/types/base'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/Menu/Menu'
import TitleContainer from '../components/Title'
import { css} from '@emotion/css';
import styles from '../styles/Home.module.css'


  

/*


  .title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}
*/


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        
        <TitleContainer/>
  
        <Menu/>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
