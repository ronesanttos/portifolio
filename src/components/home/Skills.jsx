import styles from './Skills.module.css'
import { FaReact, FaPython, FaGitAlt } from 'react-icons/fa'

function Skills() {
  return (
    <section className={styles.skills} id='skills'>
      <h3>Tecnologias</h3>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4><FaReact style={{marginRight: '8px'}} /> Front-end</h4>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>CSS Modules</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h4><FaPython style={{marginRight: '8px'}} /> Back-end</h4>
          <ul>
            <li>Django</li>
            <li>Django REST Framework</li>
            <li>PostgreSQL</li>
            <li>APIs REST</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h4><FaGitAlt style={{marginRight: '8px'}} /> Ferramentas</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker (básico)</li>
            <li>Postman</li>
            <li>Deploy (Vercel / Render)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills