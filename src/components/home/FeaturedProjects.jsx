import styles from './FeaturedProjects.module.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../../data/projects'

function FeaturedProjects() {

  return (
    <section className={styles.featured}>
      <h2>Projetos em Destaque</h2>

      <div className={styles.grid}>
        {projects.filter(project => project.featured).map((project) => (
          <div key={project.id} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.techs}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Código
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects