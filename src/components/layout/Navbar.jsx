import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span>Rone</span>Dev
        </div>

        <ul className={styles.links}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? styles.active : ''
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projetos</NavLink>
          </li>

          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar