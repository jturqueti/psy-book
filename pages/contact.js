import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Contact() {
    return (
      <>
          <Head>
        <title>Aubourg & Trotobas</title>
        <meta name="description" content="Page contact, F.Aubourg et P.Trotobas" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={styles.container}>
  <h2>Hae duae provinciae bello</h2>
  <p>Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.</p>
      </div>
      </>
    )
  }
  