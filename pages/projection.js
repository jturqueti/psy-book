import styles from "../styles/Projection.module.css";

export default function projection() {
  return (
    <div className={styles.container}>

      <div className={styles.section} >
        <div className={styles.sectionimg}>
        <a href="https://vimeo.com/361043019" target="_blank">
          {" "}
          <img className={styles.imgprojection}
            
            src="film-athanassiou.png"
            alt="film-athanassiou"
          />
        </a>
          <a className={styles.cta} href="https://vimeo.com/361043019" target="_blank">
            Voir le film
          </a>
       
      </div>
      </div>

      <div className={styles.section} >
        <h1>Les trois dimensions de l'espace psychique</h1>
        <h2>Cléopâtre Athanassiou Popesco</h2>
        <aside>
          Un film de Patricia Trotobas et Frédérick Aubourg </aside>
          <br/>
          <aside>Réalisation Justine Pellerin assistée de Pierre Marty</aside>
          <p>
            Dans ces entretiens filmés, Cléopâtre Athanassiou Popesco,
            psychanalyste, développe sa conception personnelle et originale de
            la naissance de la vie psychique et ses avatars psychopathologiques.
          </p>
        <p>Le film est disponible sur le site de Vimeo en 2 parties.</p>
      </div>
    </div>
  );
}
