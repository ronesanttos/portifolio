// src/components/layout/Footer.jsx
import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p>
                        © {year} <strong>Rone Santos</strong>. Todos os direitos reservados.
                    </p>

                    <ul className={styles.social}>
                        <li>
                            <a
                                href="https://github.com/seuusuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </li>

                        <li>
                            <a href="mailto:seuemail@email.com" aria-label="Email">
                                <MdEmail />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer