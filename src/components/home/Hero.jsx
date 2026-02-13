import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.content}>
        <h1>
          Olá, eu sou <span>Rone Santos</span>
        </h1>

        <h2>Desenvolvedor Full Stack</h2>

        <p>
          Crio aplicações web modernas com React no front-end
          e Django no back-end, criando sistemas completos,
          escaláveis e focados em performance.
        </p>

        <div className={styles.actions}>
          <Link to="/projects" className={styles.primary}>Ver Projetos</Link>
          <Link to="/contato" className={styles.secondary}>Contato</Link>
        </div>

      </div>
    </section>
  )
}

export default Hero