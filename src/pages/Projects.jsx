import { useState } from "react"
import projects from "../data/projects"
import ProjectCard from "../components/project/ProjectCard"
import styles from './Projects.module.css'

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter(project =>
          project.category === activeFilter
        )

  return (
    <section className={styles.projects}>
      <div className={styles.header}>
        <h1>Meus Projetos</h1>
        <p>
          Aqui estão alguns dos projetos que desenvolvi utilizando
          tecnologias modernas como React, Django e Node.js.
        </p>
      </div>

      {/* Filtros */}
      <div className={styles.filters}>
        {["Todos", "Front-end", "Back-end", "Fullstack"].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? `${styles.filterBtn} ${styles.active}`
                : styles.filterBtn
            }
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects