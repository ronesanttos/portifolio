import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

function ProjectCard({ id, title, description, github, demo, technologies }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>

        <div className={styles.techContainer}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demo}
        >
          Demo
        </a>

        <Link to={`/projects/${id}`} className={styles.detailsBtn}>
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard