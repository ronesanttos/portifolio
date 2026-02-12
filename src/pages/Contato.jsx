import { useState } from 'react'
import Container from '../components/layout/Container.jsx'
import styles from './Contato.module.css'

function Contato() {
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)

        try {
            await fetch("https://formsubmit.co/devronesantos@gmail.com", {
                method: "POST",
                body: formData,
            })

            setEnviado(true)
        } catch (error) {
            console.error("Erro ao enviar formulário", error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <section className={styles.contact}>
            <Container>
                <header className={styles.header}>
                    <h1>Contato</h1>
                    <p>
                        Quer conversar sobre um projeto, oportunidade ou parceria?
                        Preencha o formulário abaixo 👇
                    </p>
                </header>

                {enviado ? (
                    <div className={styles.success}>
                        <h2>Mensagem enviada ✅</h2>
                        <p>Em breve entrarei em contato.</p>
                    </div>
                ) : (
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}>
                        {/* Anti-spam */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className={styles.field}>
                            <label>Nome</label>
                            <input type="text" name="name" required />
                        </div>

                        <div className={styles.field}>
                            <label>Email</label>
                            <input type="email" name="email" required />
                        </div>

                        <div className={styles.field}>
                            <label>Mensagem</label>
                            <textarea name="message" rows="5" required />
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Enviando...' : 'Emviar mensagem.'}
                        </button>
                    </form>
                )}
            </Container>
        </section>
    )
}

export default Contato