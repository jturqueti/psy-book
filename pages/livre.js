import styles from "../styles/Projection.module.css";

export default function Livre() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionimg}>
          <a href="https://vimeo.com/361043019" target="_blank">
            {" "}
            <img
              className={styles.imglivre}
              src="aubourg-trotobas.png"
              alt="livre-accueil-au-risque-de-la-psychanalyse"
            />
          </a>
          <a
            className={styles.cta}
            href="https://vimeo.com/361043019"
            target="_blank"
          >
            Acheter sur la FNAC
          </a>
        </div>
      </div>

      <div className={styles.section}>
        <h1>L'Accueil Au Risque De La Psychanalyse</h1>
        <h2>Frédérick Aubourg & Patricia Trotobas</h2>
        <p>
        Il y aura bientôt quarante ans, Françoise Dolto créait la Maison verte. Mêlant prévention et socialisation, éducation et psychanalyse, la pratique de l accueil des jeunes enfants et de leurs parents se situe à la croisée de divers champs de savoirs et de pratiques. Partant de cette observation, les auteurs de cet ouvrage souhaitent montrer combien est nécessaire la référence à la psychanalyse dans l exercice de l accueil. Conçu comme une boîte à outils théoriques pour penser l accueil, ce livre a pour ambition de rendre possible 'l'humanisation de la petite enfance'.
        </p>
      </div>
    </div>
  );
}
