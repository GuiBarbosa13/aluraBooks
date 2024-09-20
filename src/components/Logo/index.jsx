import styles from './Logo.module.css'
import Logotipo from '../../assets/logo.svg'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img className={styles.logo__imagem} src={Logotipo} alt="Logo Alura Books" />
            <p className={styles.logo__texto}><strong>Alura</strong>Books</p>
        </div>
    )
}