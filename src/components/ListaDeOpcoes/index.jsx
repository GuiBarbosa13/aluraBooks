import styles from './ListaDeOpcoes.module.css';

const linksNavBar = [ 'CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE' ];

export default function ListaOpcoes (){
    return(
        <ul className={styles.lista}>
          { linksNavBar.map(link => <li key={link} className={styles.lista__item}><p>{link}</p></li>) }
        </ul>
    )
}