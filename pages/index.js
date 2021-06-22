import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aubourg & Trotobas</title>
        <meta name="description" content="Site de Frédérick Aubourg et Patricia Trotobas, auteurs de l'Accueil au Risque de la Psychanalyse." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Humanitatis Homerici aliquando ingenuos quod.
        </h1>

        <p className={styles.description}>
        Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.
        </p>

      </main>
    </div>
  )
}
