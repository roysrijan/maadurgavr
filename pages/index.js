import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeContent from './components/homecontent'
import HomeBanner from './components/homebanner'
import Footer from './components/footer'
import MyApp from './_app'

export default function Home() {
  return (
    <div className={styles.cotainer}>
      <main className={styles.main}>
        <section>
          <MyApp Component={HomeBanner} />
        </section>
        <section>
          <MyApp Component={HomeContent} />
        </section>
        <section>
          <MyApp Component={Footer} />
        </section>
      </main>
    </div>
  )
}
