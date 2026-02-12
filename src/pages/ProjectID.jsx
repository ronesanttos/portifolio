import { useParams } from "react-router-dom"
import projects from "../data/projects"
import styles from "./ProjectID.module.css"

function ProjectDetails() {
  const { id } = useParams()

  const project = projects.find(
    (proj) => proj.id === Number(id)
  )

  if (!project) {
    return <h2>Projeto não encontrado</h2>
  }

  return (
    <div className={styles.details_container}>
      <h1>{project.title}</h1>

      {/* IMAGEM AQUI */}
      <picture>
        <source srcSet={project.image} type="image/webp" />
        <img
        src={project.image}
        alt={project.title}
        className={styles.project_image}
      />
      </picture>
      

      <p>{project.description}</p>
      <p><strong>Categoria:</strong> {project.category}</p>
    </div>
  )
}

export default ProjectDetails