import ListaIcons from '../ListaDeIcons';
import ListaOpcoes from '../ListaDeOpcoes';
import Logo from '../Logo';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__navBar}>
                <Logo />
                <ListaOpcoes />
                <ListaIcons />
            </nav>
        </header>
    )
}