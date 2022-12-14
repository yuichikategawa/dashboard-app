import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "@fontsource/open-sans"
import "@fontsource/inria-sans"
import "@fontsource/noto-sans"
import "@fontsource/montserrat"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.login_container}>
        <div className={styles.left_login_container}>
           
        </div>
  
        <div className={styles.right_login_container}>
          <div className={styles.form}>
            <div className={styles.login_header}>
              LOGIN
            </div>

            <div className={styles.wrap_input}>
              Username
              <input className={styles.input} type="text" placeholder='Type your username'></input>
            </div>

            <div className={styles.wrap_input}>
              Password
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
