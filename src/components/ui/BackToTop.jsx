import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styles from './BackToTop.module.css'

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {visible && (
                <button
                    className={styles.backToTop}
                    onClick={scrollToTop}
                    aria-label="Topo"
                >
                   <FaArrowUp size={24} />
                   Topo
                </button>
            )}
        </>
    )
}

export default BackToTop