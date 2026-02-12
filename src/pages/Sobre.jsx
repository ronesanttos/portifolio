import styles from './Sobre.module.css'

function Sobre() {
  return (
    <section className={styles.about}>
      <div className="container">
        <header className={styles.header}>
          <h1>Sobre mim</h1>
          <p>
            Um pouco sobre quem eu sou, o que faço e como trabalho.
          </p>
        </header>

        <div className={styles.content}>
          {/* Texto principal */}
          <div className={styles.text}>
            <h2>Quem sou eu</h2>
            <p>
              Sou desenvolvedor Full Stack com foco em React e Django,
              criando aplicações web modernas, organizadas e escaláveis.
              Gosto de transformar problemas reais em soluções digitais
              eficientes e fáceis de usar.
            </p>

            <p>
              Tenho experiência no desenvolvimento de sistemas completos,
              desde o back-end com APIs REST até interfaces responsivas
              e bem estruturadas no front-end.
            </p>

            <h2>Como eu trabalho</h2>
            <p>
              Priorizo código limpo, organização e boas práticas.
              Busco sempre entender o problema antes de escrever código,
              garantindo soluções funcionais e sustentáveis.
            </p>
          </div>

          {/* Destaques */}
          <aside className={styles.cards}>
            <div className={styles.card}>
              <h3>Foco</h3>
              <p>Aplicações Web</p>
            </div>

            <div className={styles.card}>
              <h3>Stack</h3>
              <p>React · Django</p>
            </div>

            <div className={styles.card}>
              <h3>Objetivo</h3>
              <p>Gerar soluções reais</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Sobre